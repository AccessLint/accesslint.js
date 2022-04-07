import { run, Result, ImpactValue } from "axe-core";

const seen: Map<string, HTMLElement> = new Map();

async function handleMediaChange(
  mediaQueryList: MediaQueryListEvent | MediaQueryList,
  highlight: boolean
) {
  assess({ highlight });
}

async function digestMessage(message: string) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

async function assess({ highlight = false }): Promise<void> {
  try {
    const { violations }: { violations: Result[] } = await run(document, {
      elementRef: true,
      runOnly: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
      // rules: { "color-contrast": { enabled: false } },
    });

    for (const violation of violations) {
      const { description, id, nodes } = violation;

      const impactedNodes = new Map<ImpactValue, HTMLElement[]>();

      for (const node of nodes) {
        const { impact, element } = node;

        const existingNodes = impactedNodes.get(impact!) || [];
        if (element) {
          if (highlight) {
            element.style.border = ["critical", "serious"].includes(impact!)
              ? "3px dashed red"
              : "1px dotted yellow";
            element.title = `${description} (engine: Axe)`;
          }

          const dataAttributes = element.dataset;
          const classAttributes = element.classList;

          const message = JSON.stringify({
            rulesId: id,
            dataAttributes,
            classAttributes,
          });

          const signature = await digestMessage(message);
          const existing = seen.get(signature);

          if (!existing) {
            seen.set(signature, element);
            impactedNodes.set(impact!, [...existingNodes, element]);
          }
        }
      }

      for (const impact of impactedNodes.keys()) {
        const results = impactedNodes.get(impact);

        const message = [
          `[A11yLogger]: ${id}`,
          {
            description,
            results,
            impact,
            engine: "axe-core",
          },
        ];

        if (impact === "critical") {
          console.warn(...message);
        } else {
          console.log(...message);
        }
      }
    }
  } catch (error) {
    console.error(`[A11yLogger]: ${error}`);
  }
}

function init({
  environment,
  handlerEventNames,
  waitForIdle = true,
  highlight = false,
}: {
  waitForIdle: boolean;
  environment: "development" | "staging" | "production";
  handlerEventNames: (
    | keyof WindowEventHandlersEventMap
    | keyof GlobalEventHandlersEventMap
  )[];
  highlight: boolean;
}) {
  if (!["development", "staging"].includes(environment)) {
    return;
  }

  const mediaQueryList = window.matchMedia("(max-width: 576px)");
  handleMediaChange(mediaQueryList, highlight);
  mediaQueryList.addEventListener("change", (e) => {
    handleMediaChange(e, highlight);
  });

  window.addEventListener("accesslint:run", (event: CustomEventInit) => {
    const { waitForIdle, highlight } = event.detail;
    if (waitForIdle && window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        assess({ highlight });
      });
    } else {
      assess({ highlight });
    }
  });

  for (const handlerEventName of handlerEventNames) {
    window.addEventListener(handlerEventName, () => {
      const newEvent = new CustomEvent("accesslint:run", {
        bubbles: true,
        cancelable: true,
        detail: {
          handlerEventName,
          highlight,
          waitForIdle,
        },
      });

      window.dispatchEvent(newEvent);
    });
  }
}

init({
  handlerEventNames: ["load", "popstate", "click", "animationend"],
  environment: "development",
  waitForIdle: true,
  highlight: true,
});

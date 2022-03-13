import { run, Result, ImpactValue } from "axe-core";

async function assess() {
  try {
    const { violations }: { violations: Result[] } = await run(document, {
      elementRef: true,
    });

    for (const violation of violations) {
      const { description, id, nodes } = violation;

      const impactedNodes = new Map<ImpactValue, HTMLElement[]>();

      for (const node of nodes) {
        const { impact, element } = node;

        const existingNodes = impactedNodes.get(impact!) || [];
        if (element) {
          impactedNodes.set(impact!, [...existingNodes, element]);
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

function init() {
  window.addEventListener("accesslint:run", (event) => {
    assess();
  });
}

init();

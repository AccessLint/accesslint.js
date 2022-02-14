import { run, Result } from "axe-core";

async function assess() {
  try {
    const { violations }: { violations: Result[] } = await run(document);

    for (const violation of violations) {
      const { description, help, id, impact } = violation;

      const nodes = violation.nodes.map((node) => {
        return document.querySelector(
          node.target as unknown as keyof HTMLElementTagNameMap
        );
      });

      const message = [
        `[A11yLogger]: ${id}`,
        {
          help,
          description,
          impact,
          nodes,
        },
      ];

      if (impact === "critical") {
        console.warn(...message);
      } else {
        console.log(...message);
      }
    }
  } catch (error) {
    console.error(`[A11yLogger]: ${error}`);
  }
}

function perform() {
  window.requestIdleCallback(() => {
    assess();
  });

  window.addEventListener("click", () => {
    window.requestIdleCallback(() => {
      assess();
    });
  });
}

perform();

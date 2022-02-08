import { Result, source } from "axe-core";

async function assess() {
  const { axe } = window as unknown as any;
  const { violations }: { violations: Result[] } = await axe.run();

  for (const violation of violations) {
    const { description, help, impact } = violation;

    const nodes = violation.nodes.map((node) => {
      return document.querySelector(
        node.target as unknown as keyof HTMLElementTagNameMap
      );
    });

    console.warn(`[A11yLogger] ${description}`, {
      help,
      impact,
      nodes,
    });
  }
}

function run() {
  window.requestIdleCallback(() => {
    window.eval(source);
    assess();
  });

  window.addEventListener("click", () => {
    window.requestIdleCallback(() => {
      assess();
    });
  });
}

run();

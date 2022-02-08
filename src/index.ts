import { Result, source } from "axe-core";

const rules = [
  { id: "area-alt" },
  { id: "aria-required-attr" },
  { id: "audio-caption" },
  { id: "autocomplete-valid" },
  { id: "avoid-inline-spacing" },
  { id: "button-name" },
  { id: "empty-table-header" },
  { id: "image-alt" },
  { id: "input-button-name" },
  { id: "label" },
  { id: "link-name" },
  { id: "marquee" },
  { id: "meta-refresh" },
  { id: "nested-interactive" },
  { id: "object-alt" },
  { id: "role-img-alt" },
  { id: "svg-img-alt" },
  { id: "td-headers-attr" },
  { id: "th-has-data-cells" },
  { id: "video-caption" },
];

async function assess() {
  const { axe } = window as unknown as any;
  axe.configure({ rules, disableOtherRules: true });
  const { violations }: { violations: Result[] } = await axe.run();

  for (const violation of violations) {
    const { description, help, impact } = violation;

    const nodes = violation.nodes.map((node) => {
      return document.querySelector(
        node.target as unknown as keyof HTMLElementTagNameMap
      );
    });

    console.warn(`[AccessLint] ${description}`, {
      description,
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

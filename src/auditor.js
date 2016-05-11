import { axe } from "axe-core/axe.min.js";
import report from "./reporter";

export default function () {
  window.axe.configure({
    checks: [{
      id: "color-contrast",
      options: { noScroll: true }
    }]
  });

  window.axe.a11yCheck(document, (results) => {
    report(results);
  });
}

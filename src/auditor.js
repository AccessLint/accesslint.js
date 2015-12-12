import { axe } from "axe-core/axe.min.js";
import report from "./reporter";

export default function () {
  const options = {
    "rules": {
      "color-contrast": { enabled: false },
    }
  };

  window.axe.a11yCheck(document, options, (results) => {
    report(results);
  });
}

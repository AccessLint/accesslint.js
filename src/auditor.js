import { axe } from "axe-core/axe.min.js";
import report from "./reporter";

export default function(target, logger) {
  const options = {
    "rules": {
      "color-contrast": { enabled: false },
    }
  };

  window.axe.a11yCheck(target.parentNode, options, (results) => {
    report(results, logger);
    window.AccessLint.results = results;
  });
}

import { axe } from "axe-core/axe.min.js";
import report from "./reporter";

export default function () {
  window.axe.a11yCheck(document, (results) => {
    report(results);
  });
}

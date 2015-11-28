import { axe } from "axe-core/axe.min.js";
import logger from "./logger";

export default function (url, raiseError) {
  window.axe.a11yCheck(document, {}, (results) => {
    logger(results, url, raiseError);
  });
}

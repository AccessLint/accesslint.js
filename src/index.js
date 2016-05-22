import auditor from "./auditor.js";
import Logger from "./logger";

(function() {
  var logger = new Logger();
  var load = function() {
    auditor(document, logger);
  };

  var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  };

  window.AccessLint = {};
  window.addEventListener("load", load);
  window.addEventListener("accesslint:run", load);
})();

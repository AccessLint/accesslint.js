import auditor from "./auditor.js";

(function() {
  var load = function() {
    window.removeEventListener("load", load, false);
    auditor();
  };

  window.addEventListener("load", load);
})();

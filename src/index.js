import auditor from "./auditor.js";

(function() {
  var load = function() {
    window.removeEventListener("load", load, false);
    auditor(document);
  };

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      auditor(mutation.target);
    });
  });

  var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
  };

  window.addEventListener("load", load);
  observer.observe(document, config);
})();

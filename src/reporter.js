import request from "browser-request";

const url = "/access_lint/errors";

export default function(message, logger) {

  var violations = message.violations.map(function(violation) {
    return {
      description: violation.description,
      help: violation.help,
      impact: violation.impact,
      nodes: violation.nodes.map(function(n) {
        return document.querySelector(n.target);
      }),
    };
  });

  if (violations.length > 0) {
    request({
      method: "POST",
      url: url,
      json: {
        accesslint: {
          violations: violations,
          url: window.location.pathname
        }
      }
    }, function() {});

    violations.forEach(function(violation) {
      logger.warn(violation);
    });
  }
}

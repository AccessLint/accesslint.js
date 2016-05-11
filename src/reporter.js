import request from "browser-request";

const url = "/access_lint/errors"

export default function (message) {
  var violations = message.violations.map(function(violation) {
    return {
      description: violation.description,
      help: violation.help,
      helpUrl: violation.helpUrl,
      id: violation.id,
      nodes: violation.nodes.map(function(n) {
        return {
          target: n.target,
          html: n.html,
          impact: n.impact
        };
      }),
      tags: violation.tags
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
  }

  console.log("AccessLint warnings: ", violations);
}

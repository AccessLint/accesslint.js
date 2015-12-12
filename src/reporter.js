import request from "browser-request";

const url = "https://beta.accesslint.com/api/v1/reports";

export default function (message) {
  const violations = message.violations;

  if (violations.length > 0) {
    let descriptions = [];
    let snippets = [];

    violations.map((violation) => {
      violation.nodes.map((node) => {
        snippets.push(node.html);
      });

      descriptions.push(violation.help + "\n" + snippets.join("\n"));
    });

    request({
      method: "POST",
      url: url,
      json: message,
    }, function() {});

    throw new Error(
      `AccessLintError: ${violations.length} violations:` + "\n" +
      descriptions.join(",\n")
    );
  }
}

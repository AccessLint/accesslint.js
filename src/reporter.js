import request from "browser-request";

const url = "https://accesslint-service-staging.herokuapp.com/api/v1/reports";

export default function (message) {
  const violations = message.violations;

  if (violations.length > 0) {
    let descriptions = [];

    violations.map((violation) => {
      descriptions.push(violation.help);
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

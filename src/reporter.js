import request from "browser-request";

const url = "https://beta.accesslint.com/api/v1/reports";

export default function (message) {
  const violations = message.violations;

  if (violations.length > 0) {
    request({
      method: "POST",
      url: url,
      json: message,
    }, function() {});

    console.error(
      `AccessLint - ${violations.length} accessibility violations:`,
      violations
    );
  }
}

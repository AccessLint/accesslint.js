import request from "browser-request";

const url = "http://beta.accesslint.com/api/v1/reports";

export default function (message) {
  let violations = message.violations;

  if (violations.length > 0) {
    request({
      method: "POST",
      url: url,
      json: message,
    }, function() {});

    console.error(message);
    throw new Error(`AccessLintError: ${violations.length} violations.`);
  }
}

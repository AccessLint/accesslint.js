import request from "browser-request";

export default function (message, url, raiseError) {
  let violations = message.violations;

  if (raiseError && violations.length > 0) {
    console.error(message);
    throw new Error(`AccessLintError: ${violations.length} violations.`);
  } else {
    request({
      method: "POST",
      url: url,
      json: message,
    }, function() {});
  }
}

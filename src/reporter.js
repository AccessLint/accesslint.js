import request from "browser-request";

const url = "/access_lint/errors"

export default function (message) {
  const violations = message.violations;

  if (violations.length > 0) {
    request({
      method: "POST",
      url: url,
      json: message,
    }, function() {});
  }
}

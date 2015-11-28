import auditor from "./auditor.js";

const DEFAULT_URL = "https://accesslint-service-staging.herokuapp.com/api/v1/reports";

window.AccessLint = {
  audit({ url = DEFAULT_URL, raiseError = false }) {
    auditor(url, raiseError);
  },
};

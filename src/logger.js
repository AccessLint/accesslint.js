import request from "request";

export default function (message) {
  let url = `${window.location}accesslint`;
  let cb = (error, response, body) => {
    console.log(error, response, JSON.parse(body));
  };

  request.post({
    url: url,
    form: { results: message }
  }, cb);
}

import request from "request";

export default function (message) {
  request.post(`${window.location}accesslint`, message)
}

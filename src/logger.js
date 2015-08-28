import request from "request";

export default function (message) {
  request.post("http://localhost:3000", message)
}

var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.send("index.html");
});

app.post("/accesslint", function(req, res) {
  res.send("Success!");
});

app.listen(3000);

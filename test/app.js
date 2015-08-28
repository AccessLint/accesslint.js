var express = require("express");
var cors = require("cors");
var app = express();

app.post("/", cors(), function(req, res) {
  res.send("Success!");
});

app.listen(3000);

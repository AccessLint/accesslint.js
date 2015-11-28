var express = require("express");
var bodyParser = require("body-parser")
var app = express();

app.use(express.static(__dirname + "../../../dist"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.send("index.html");
});

app.post("/accesslint", function(req, res) {
  res.send(req.body);
});

app.listen(3000);

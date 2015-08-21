express = require "express"
cors = require "cors"
app = express()

corsOptions =
  origin: "http://localhost:8000"
  credentials: true

app.post "/", cors(corsOptions), (req, res) ->
  res.send "Success!"

app.listen 3000

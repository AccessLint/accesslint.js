express = require "express"
cors = require "cors"
app = express()

app.post "/", cors(), (req, res) ->
  res.send "Success!"

app.listen 3000

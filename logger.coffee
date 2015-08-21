request = require "request"

class Logger
  @log: (message) ->
    request.post("http://localhost:3000", message)

module.exports = Logger

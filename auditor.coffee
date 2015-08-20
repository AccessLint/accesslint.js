axs = require("accessibility-developer-tools/dist/js/axs_testing").axs

class Auditor
  perform: ->
    if @._errors()
      console.log @._errors()

  _errors: ->
    result for result in @._results() when result.result is "FAIL"

  _results: ->
    @results ?= axs.Audit.run()


module.exports = Auditor

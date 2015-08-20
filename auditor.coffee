class Auditor
  call: (dom) ->
    if dom
      @.log([ { error: "message" } ])

  log: ->

module.exports = Auditor

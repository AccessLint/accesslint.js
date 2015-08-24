Logger = require "./logger.coffee"
axe = require("axe-core/axe.min.js").axe

class Auditor
  perform: ->
    window.axe.a11yCheck document, {}, (results) ->
      elements = violation.nodes[0].html for violation in results.violations
      Logger.log elements

module.exports = Auditor

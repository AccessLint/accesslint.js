accessLintMonitor = require "../access-lint-monitor"
chai = require "chai"
sinon = require "sinon"
sinonChai = require "sinon-chai"
expect = chai.expect

chai.use sinonChai

describe "#audit", ->
  it "runs the audit", ->
    expect(accessLintMonitor.audit()).to.be.empty


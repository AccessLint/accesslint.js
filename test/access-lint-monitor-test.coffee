Auditor = require "../auditor"
chai = require "chai"
sinon = require "sinon"
sinonChai = require "sinon-chai"
expect = chai.expect

chai.use sinonChai

describe "#audit", ->
  context "with errors", ->
    it "phones home", ->
      dom = {}
      auditor = new Auditor()
      log = sinon.spy(auditor, "log")
      auditor.call(dom)

      expect(log).to.have.been.calledWith([{ error: "message" }])

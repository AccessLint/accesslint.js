"use strict";

let chai = require("chai");
let sinon = require("sinon");
let sinonChai = require("sinon-chai");
chai.use(sinonChai);
let expect = chai.expect;

import auditor from "../../src/auditor";
import report from "../../src/reporter";

describe("auditor", () => {
  it("runs axe-core tests", () => {
    let axe = sinon.spy();
    window.axe = { a11yCheck: axe };

    auditor(document);

    expect(axe).to.have.been.called;
  });
});

describe("report", () => {
  it("logs violations", () => {
    let results = {
      violations: [{
        description: "description",
        help: "help",
        impact: "impact",
        nodes: []
      }]
    };
    sinon.spy(console, "warn");

    report(results);

    expect(console.warn).to.have.been.called.once;
  });
});

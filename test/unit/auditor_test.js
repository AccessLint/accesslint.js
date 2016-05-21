"use strict";

let chai = require("chai");
let sinon = require("sinon");
let sinonChai = require("sinon-chai");
chai.use(sinonChai);
let expect = chai.expect;

import auditor from "../../src/auditor";
import report from "../../src/reporter";
import Logger from "../../src/logger";

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
    let logger = new Logger();
    sinon.spy(logger, "warn");

    report(results, logger);

    expect(logger.warn).to.have.been.called.once;
  });
});

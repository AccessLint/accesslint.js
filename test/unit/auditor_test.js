"use strict";

let chai = require("chai");
let sinon = require("sinon");
let sinonChai = require("sinon-chai");
let expect = chai.expect;
chai.use(sinonChai);

import auditor from "../../src/auditor";

describe("default", () => {
  it("runs axe-core tests", () => {
    let axeSpy = sinon.spy();
    window.axe = { a11yCheck: axeSpy }

    auditor();

    expect(axeSpy).to.be.have.been.called;
  });
});

let chai = require("chai");
let sinon = require("sinon");
let sinonChai = require("sinon-chai");
chai.use(sinonChai);
let expect = chai.expect;

import Logger from "../../src/logger";

describe("warn", () => {
  it("logs to console.warn", () => {
    let logger = new Logger();
    sinon.spy(console, "warn");

    logger.warn({ help: "example", nodes: []});
    logger.warn({ help: "example", nodes: []});

    expect(console.warn).to.be.have.been.calledWith("example", []);
    expect(console.warn).to.be.have.been.calledOnce;
  });
});

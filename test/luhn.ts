import { expect } from "chai";

import luhn_validate from "../src/utils/luhn";

describe("Luhn 10 algorithm", () => {
  it("returns false for wrong credit card numbers.", () => {
    expect(luhn_validate("1335628732")).to.equal(false);
  });

  it("returns true for correct credit card numbers.", () => {
    expect(luhn_validate("0788032373")).to.equal(true);
  });

  it("returns true for correct credit card numbers.", () => {
    expect(luhn_validate("7335828732")).to.equal(true);
  });
});

import { expect } from "chai";
import { add } from "../src/add";

describe("Addition", () => {
  it("should return the sum of two numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });
});
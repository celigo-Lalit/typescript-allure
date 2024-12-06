import { expect } from "chai";
import { subtract } from "../src/subtract";

describe("Subtraction", () => {
  it("should return the difference of two numbers", () => {
    expect(subtract(5, 3)).to.equal(2);
  });
});

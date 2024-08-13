import { recalculateRem } from "../../../src/utils/calculations";

describe("recalculateRem", () => {
  it("should recalculate rem correctly", () => {
    const result = recalculateRem(16, 8, true, 10);
    expect(result).toBe(10);
  });

  it("should recalculate rem correctly", () => {
    const result = recalculateRem(16, 8, false, 10);
    expect(result).toBe(20);
  });
});

import { convertUnits } from "../../../src/utils/calculations";

describe("convertUnits", () => {
  it("should convert units correctly", () => {
    const result = convertUnits(10, true, 16);
    expect(result).toBe(160);
  });

  it("should convert units correctly", () => {
    const result = convertUnits(10, false, 16);
    expect(result).toBe(0.625);
  });
});

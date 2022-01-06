import { describe, it, expect } from "@jest/globals";

import { romanConverter } from "./romanConverter";

describe("Roman digit converter", () => {
  it("should 47 to 'XLVII'", () => {
    const content = "XLVII";
    const result = romanConverter(content);
    const expected = 47;

    expect(result).toEqual(expected);
  });

  it("should return 438 to 'CDXXXVIII'", () => {
    const content = "CDXXXVIII";
    const result = romanConverter(content);

    const expected = 438;

    expect(result).toEqual(expected);
  });

  it("should return 909 to 'CMIX'", () => {
    const content = "CMIX";
    const result = romanConverter(content);

    const expected = 909;

    expect(result).toEqual(expected);
  });

  it("should return 3999 to 'MMMCMXCIX'", () => {
    const content = "MMMCMXCIX";
    const result = romanConverter(content);

    const expected = 3999;

    expect(result).toEqual(expected);
  });
});

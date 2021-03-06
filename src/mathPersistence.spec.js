import { describe, it, expect } from "@jest/globals";

import { mathPersistence } from "./mathPersistence";

describe("Math persistence", () => {
  it("should return 3 to 539", () => {
    const content = 539;
    const result = mathPersistence(content);
    const expected = 3;

    expect(result).toEqual(expected);
  });

  it("should return 4 to 999", () => {
    const content = 999;
    const result = mathPersistence(content);
    const expected = 4;

    expect(result).toEqual(expected);
  });

  it("should return 0 to 7", () => {
    const content = 7;
    const result = mathPersistence(content);
    const expected = 0;

    expect(result).toEqual(expected);
  });

  it("should return 5 to 7169", () => {
    const content = 7169;
    const result = mathPersistence(content);
    const expected = 5;

    expect(result).toEqual(expected);
  });
});

import { describe, it, expect } from "@jest/globals";

import { breakingPassword } from "./breakingPassword";

describe("Cesar string decrypt", () => {
  it("should return void to [ ] with", () => {
    const content = [];
    const result = breakingPassword(content);
    const expected = [[]];

    expect(result).toEqual(expected);
  });

  it("should return the correct array to [1,2,3] with", () => {
    const content = [1, 2, 3];
    const result = breakingPassword(content);
    const expected = [
      [1, 2, 3],
      [2, 1, 3],
      [2, 3, 1],
      [1, 3, 2],
      [3, 1, 2],
      [3, 2, 1],
    ];

    expect(result).toEqual(expected);
  });

  it("should return the correct array to ['X', 's', '-', '#' ] with", () => {
    const content = ["X", "s", "-", "#"];
    const result = breakingPassword(content);
    const expected = [
      ["X", "s", "-", "#"],
      ["s", "X", "-", "#"],
      ["s", "-", "X", "#"],
      ["s", "-", "#", "X"],
      ["X", "-", "s", "#"],
      ["-", "X", "s", "#"],
      ["-", "s", "X", "#"],
      ["-", "s", "#", "X"],
      ["X", "-", "#", "s"],
      ["-", "X", "#", "s"],
      ["-", "#", "X", "s"],
      ["-", "#", "s", "X"],
      ["X", "s", "#", "-"],
      ["s", "X", "#", "-"],
      ["s", "#", "X", "-"],
      ["s", "#", "-", "X"],
      ["X", "#", "s", "-"],
      ["#", "X", "s", "-"],
      ["#", "s", "X", "-"],
      ["#", "s", "-", "X"],
      ["X", "#", "-", "s"],
      ["#", "X", "-", "s"],
      ["#", "-", "X", "s"],
      ["#", "-", "s", "X"],
    ];

    expect(result).toEqual(expected);
  });
});

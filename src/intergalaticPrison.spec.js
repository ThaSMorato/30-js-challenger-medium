import { describe, it, expect } from "@jest/globals";

import { intergalaticPrison } from "./intergalaticPrison";

describe("intergalatic prison return ids", () => {
  it("should return ['0003', '0009', '0014', '0017', '0018', '0019'] to ['0020','0002','0013', '0004', '0001', '0016', '0015', '0006', '0012', '0007', '0005', '0008', '0011', '0010']", () => {
    const content = [
      "0020",
      "0002",
      "0013",
      "0004",
      "0001",
      "0016",
      "0015",
      "0006",
      "0012",
      "0007",
      "0005",
      "0008",
      "0011",
      "0010",
    ];
    const result = intergalaticPrison(content);
    const expected = ["0003", "0009", "0014", "0017", "0018", "0019"];

    expect(result).toEqual(expected);
  });

  it("should return [] to ['0003', '0009', '0014', '0017', '0018', '0019', '0020','0002','0013', '0004', '0001', '0016', '0015', '0006', '0012', '0007', '0005', '0008', '0011', '0010']", () => {
    const content = [
      "0003",
      "0009",
      "0014",
      "0017",
      "0018",
      "0019",
      "0020",
      "0002",
      "0013",
      "0004",
      "0001",
      "0016",
      "0015",
      "0006",
      "0012",
      "0007",
      "0005",
      "0008",
      "0011",
      "0010",
    ];
    const result = intergalaticPrison(content);
    const expected = [];

    expect(result).toEqual(expected);
  });

  it("should return ['0001'] to ['0004', '0002','0005','0003']", () => {
    const content = ["0004", "0002", "0005", "0003"];
    const result = intergalaticPrison(content);
    const expected = ["0001"];

    expect(result).toEqual(expected);
  });

  it("should return [] to []", () => {
    const content = [];
    const result = intergalaticPrison(content);
    const expected = [];

    expect(result).toEqual(expected);
  });
});

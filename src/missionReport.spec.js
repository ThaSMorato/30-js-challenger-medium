import { describe, it, expect } from "@jest/globals";

import { missionReport } from "./missionReport";

describe("Mission report", () => {
  it("should return capaz de utilizar as capsulas de emergencia to content", () => {
    const content = {
      phrase: "capaz utilizar as capsulas emergencia",
      word: "de ",
      indexes: [6, 27],
    };
    const result = missionReport(content);
    const expected = "capaz de utilizar as capsulas de emergencia";

    expect(result).toEqual(expected);
  });

  it("should return Nos decidimos, apesar das chances serem baixas, que enviariamos [...] to content", () => {
    const content = {
      phrase: "Nos decidimos apesar das chances serem baixas que enviariamos [...]",
      word: ",",
      indexes: [13, 45],
    };
    const result = missionReport(content);
    const expected = "Nos decidimos, apesar das chances serem baixas, que enviariamos [...]";

    expect(result).toEqual(expected);
  });

  it("should return Isso eh um teste to content", () => {
    const content = {
      phrase: "Isso eh um teste",
      word: "nao",
      indexes: [],
    };
    const result = missionReport(content);
    const expected = "Isso eh um teste";

    expect(result).toEqual(expected);
  });

  it("should return Isso eh um teste to content", () => {
    const content = {
      phrase: "Isso eh um teste",
      word: "nao",
      indexes: [65],
    };
    const result = missionReport(content);
    const expected = "Isso eh um teste";

    expect(result).toEqual(expected);
  });
});

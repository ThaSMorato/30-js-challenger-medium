import { describe, it, expect } from "@jest/globals";

import { Location } from "./coordinateDistance";

describe("Coordinate distance", () => {
  it("should return 'Alfa' to [37, 42, 15]", () => {
    const content = [37, 42, 15];
    const location = new Location(content);
    const result = { distance: location.distance, setor: location.setor };
    const expected = { distance: 57.94825277780168, setor: "Alfa" };

    expect(result).toEqual(expected);
  });

  it("should return 'Alfa' to [144, 49, 0]", () => {
    const content = [144, 49, 0];
    const location = new Location(content);
    const result = { distance: location.distance, setor: location.setor };
    const expected = { distance: 152.10851389715174, setor: "Alfa" };

    expect(result).toEqual(expected);
  });

  it("should return 'Epsilon' to [-37, 0, 0]", () => {
    const content = [-37, 0, 0];
    const location = new Location(content);
    const result = { distance: location.distance, setor: location.setor };
    const expected = { distance: 37, setor: "Epsilon" };

    expect(result).toEqual(expected);
  });

  it("should return 'Omega' to [-19, -80, -32]", () => {
    const content = [-19, -80, -32];
    const location = new Location(content);
    const result = { distance: location.distance, setor: location.setor };
    const expected = { distance: 88.23264701911646, setor: "Omega" };

    expect(result).toEqual(expected);
  });

  it("should return 'Delta' to [19, -80, -32]", () => {
    const content = [19, -80, -32];
    const location = new Location(content);
    const result = { distance: location.distance, setor: location.setor };
    const expected = { distance: 88.23264701911646, setor: "Delta" };

    expect(result).toEqual(expected);
  });
});

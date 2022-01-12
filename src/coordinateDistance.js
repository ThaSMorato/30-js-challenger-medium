export class Location {
  #estationCoordinate = [0, 0, 0];
  #setors = new Map([
    [[true, true, true].join(""), "Alfa"],
    [[true, true, false].join(""), "Beta"],
    [[true, false, true].join(""), "Game"],
    [[true, false, false].join(""), "Delta"],
    [[false, true, true].join(""), "Epsilon"],
    [[false, true, false].join(""), "Zeta"],
    [[false, false, true].join(""), "Sigma"],
    [[false, false, false].join(""), "Omega"],
  ]);

  constructor(coordinate) {
    this.coordinate = coordinate;
  }

  #calculateDistanceBetweenCoordinates(coordinateA, coordinateB) {
    const [xa, ya, za] = coordinateA;
    const [xb, yb, zb] = coordinateB;

    return Math.sqrt(Math.pow(xb - xa, 2) + Math.pow(yb - ya, 2) + Math.pow(zb - za, 2));
  }

  get distance() {
    return this.#calculateDistanceBetweenCoordinates(this.#estationCoordinate, this.coordinate);
  }

  get setor() {
    const booleanCordenate = this.coordinate.map((coord) => coord >= 0).join("");
    return this.#setors.get(booleanCordenate);
  }
}

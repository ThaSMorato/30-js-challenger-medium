import { describe, it, expect } from "@jest/globals";

import { Equation } from "./Equation";

describe("Equation", () => {
  it("should return -3 to 'b = 2 and c = 6'", () => {
    const content = {
      b: 2,
      c: 6,
    };
    const equation = new Equation(content);

    const result = equation.result;

    const expected = [
      `${content.b}x + ${content.c} = 0`,
      `${content.b}x = ${-content.c}`,
      `x = ${-content.c}/${content.b}`,
      `x = ${-content.c / content.b}`,
      [-content.c / content.b],
    ];

    expect(result).toEqual(expected);
  });

  it("should return [] to 'c = 6'", () => {
    const content = {
      c: 6,
    };
    const equation = new Equation(content);

    const result = equation.result;

    const expected = ["Parametros Insuficientes", "Nenhuma raiz real", []];

    expect(result).toEqual(expected);
  });

  it("should return [5, -1] to 'a = 1, b = -4, c = -5'", () => {
    const content = {
      a: 1,
      b: -4,
      c: -5,
    };

    const equation = new Equation(content);

    const result = equation.result;

    const delta = content.b ** 2 - 4 * content.a * content.c;
    const sqrtDelta = Math.sqrt(delta);
    const x1 = ((-content.b + sqrtDelta) / 2) * content.a;
    const x2 = ((-content.b - sqrtDelta) / 2) * content.a;

    const expected = [
      `D = ${content.b}^2 - 4.${content.a}.${content.c}`,
      `D = ${delta}`,
      `x' = (-${content.b} + \\/${delta}) / 2${content.a}`,
      `x'' = (-${content.b} - \\/${delta}) / 2${content.a}`,
      `x' = (${-content.b} + \\/${delta}) / ${2 * content.a}`,
      `x'' = (${-content.b} - \\/${delta}) / ${2 * content.a}`,
      `x' = (${-content.b} + ${sqrtDelta}) / ${2 * content.a}`,
      `x'' = (${-content.b} - ${sqrtDelta}) / ${2 * content.a}`,
      `x' = ${x1}`,
      `x'' = ${x2}`,
      [x1, x2],
    ];

    expect(result).toEqual(expected);
  });

  it("should return an error id none of the parameters is passed", () => {
    const content = {};

    const equation = new Equation(content);

    try {
      const result = equation.result;
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
      expect(e.message).toBe("Erro! Nenhum parametro passado");
    }
  });

  it("should return [] to 'a = 1, b = -4, c = 6'", () => {
    const content = {
      a: 1,
      b: -4,
      c: 6,
    };

    const equation = new Equation(content);

    const result = equation.result;

    const delta = content.b ** 2 - 4 * content.a * content.c;

    const expected = [
      `D = ${content.b}^2 - 4.${content.a}.${content.c}`,
      `D = ${delta}`,
      "Nenhuma raiz",
      [],
    ];

    expect(result).toEqual(expected);
  });
});

export class Equation {
  #a;
  #b;
  #c;

  constructor({ a, b, c }) {
    (this.#a = a), (this.#b = b), (this.#c = c);
  }

  get result() {
    if (!this.#a && this.#b) {
      return [...this.#firstDegree()];
    } else if (!this.#b) {
      return [...this.#flatValue()];
    } else if (!this.#c) {
      throw new Error("Erro! Nenhum parametro passado");
    }
    return [...this.#secondDegree()];
  }

  #firstDegree = function* () {
    yield `${this.#b}x + ${this.#c} = 0`;
    yield `${this.#b}x = ${-this.#c}`;
    yield `x = ${-this.#c}/${this.#b}`;
    yield `x = ${-this.#c / this.#b}`;
    yield [-this.#c / this.#b];
  };

  #flatValue = function* () {
    yield "Parametros Insuficientes";
    yield "Nenhuma raiz real";
    yield [];
  };

  #secondDegree = function* () {
    const delta = this.#b ** 2 - 4 * this.#a * this.#c;
    yield `D = ${this.#b}^2 - 4.${this.#a}.${this.#c}`;
    yield `D = ${delta}`;
    if (delta < 0) {
      yield "Nenhuma raiz";
      yield [];
    } else {
      const sqrtDelta = Math.sqrt(delta);
      const x1 = ((-this.#b + sqrtDelta) / 2) * this.#a;
      const x2 = ((-this.#b - sqrtDelta) / 2) * this.#a;
      yield `x' = (-${this.#b} + \\/${delta}) / 2${this.#a}`;
      yield `x'' = (-${this.#b} - \\/${delta}) / 2${this.#a}`;
      yield `x' = (${-this.#b} + \\/${delta}) / ${2 * this.#a}`;
      yield `x'' = (${-this.#b} - \\/${delta}) / ${2 * this.#a}`;
      yield `x' = (${-this.#b} + ${sqrtDelta}) / ${2 * this.#a}`;
      yield `x'' = (${-this.#b} - ${sqrtDelta}) / ${2 * this.#a}`;
      yield `x' = ${x1}`;
      yield `x'' = ${x2}`;
      yield [x1, x2];
    }
  };
}

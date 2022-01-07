import { describe, it, expect } from "@jest/globals";

import { cesarCipherDecrypt } from "./cesarCipher";

describe("Cesar string decrypt", () => {
  it("should return Teste to 'Vguvg' with key 2", () => {
    const content = "Vguvg";
    const key = 2;
    const result = cesarCipherDecrypt(content, key);
    const expected = "Teste";

    expect(result).toEqual(expected);
  });

  it("should return ABCXYZabcxyz to 'BCDYZAbcdyza' with key 27", () => {
    const content = "BCDYZAbcdyza";
    const key = 27;
    const result = cesarCipherDecrypt(content, key);
    const expected = "ABCXYZabcxyz";

    expect(result).toEqual(expected);
  });

  it("should return Isaac to 'Qaiik' with key 60", () => {
    const content = "Qaiik";
    const key = 60;
    const result = cesarCipherDecrypt(content, key);
    const expected = "Isaac";

    expect(result).toEqual(expected);
  });

  it("should return Segredo to 'Amozmlw' with key 8", () => {
    const content = "Amozmlw";
    const key = 8;
    const result = cesarCipherDecrypt(content, key);
    const expected = "Segredo";

    expect(result).toEqual(expected);
  });

  it("should return Test with space to 'Ithi lxiw heprt' with key 15", () => {
    const content = "Ithi lxiw heprt";
    const key = 15;
    const result = cesarCipherDecrypt(content, key);
    const expected = "Test with space";

    expect(result).toEqual(expected);
  });
});

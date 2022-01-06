const romanDictionary = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

export function romanConverter(romanNumber) {
  return romanNumber
    .split("")
    .map((romanDigit) => romanDictionary.get(romanDigit) ?? 0)
    .reduceRight(
      (acc, digit, index, array) => (array[index + 1] > digit ? acc - digit : acc + digit),
      0
    );
}

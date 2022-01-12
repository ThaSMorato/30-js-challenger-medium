export function mathPersistence(number) {
  if (`${number}`.length === 1) return 0;

  const timesResult = `${number}`.split("").reduce((acc, value) => acc * Number(value), 1);

  return 1 + mathPersistence(timesResult);
}

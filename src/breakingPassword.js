export function breakingPassword(passwordChars) {
  if (passwordChars.length === 0) return [[]];

  const firstChar = passwordChars[0];
  const partialChars = passwordChars.slice(1);

  const partialPossibilities = breakingPassword(partialChars);

  const completePasswords = partialPossibilities.reduce((acc, partialPossibility) => {
    for (let i = 0; i <= partialPossibility.length; i++) {
      acc.push([...partialPossibility.slice(0, i), firstChar, ...partialPossibility.slice(i)]);
    }

    return acc;
  }, []);

  return completePasswords;
}

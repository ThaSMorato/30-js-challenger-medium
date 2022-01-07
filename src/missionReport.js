export function missionReport({ phrase, word, indexes }) {
  const phraseArray = phrase.split("");

  indexes.forEach((index) => {
    if (index <= phraseArray.length) phraseArray[index] = word + phraseArray[index];
  });

  return phraseArray.join("");
}

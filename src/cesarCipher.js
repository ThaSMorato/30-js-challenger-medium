const ACharCode = "A".charCodeAt(0);
const ZCharCode = "Z".charCodeAt(0);
const aCharCode = "a".charCodeAt(0);
const zCharCode = "z".charCodeAt(0);
const maxLength = ZCharCode - ACharCode + 1; // +1 por se tratar de tamanho e nao diferenca

const normalizeCode = (code, key) => {
  if (
    (code >= ACharCode && code <= ZCharCode && code - key < ACharCode) ||
    (code >= aCharCode && code <= zCharCode && code - key < aCharCode)
  )
    return code + maxLength;
  return code;
};

const decryptChar = (key) => (char) => {
  const code = normalizeCode(char.charCodeAt(0), key);

  return String.fromCharCode(code - key);
};

export function cesarCypherDecrypt(encryptedString, key) {
  const correctKey = key <= maxLength ? key : key % maxLength;

  const decryptedCharWithKey = decryptChar(correctKey);

  return encryptedString
    .split(" ")
    .map((string) => string.split("").map(decryptedCharWithKey).join(""))
    .join(" ");
}

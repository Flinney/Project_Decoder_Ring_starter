// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const orderedAlpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

  function isValid(alpha) {
    return alpha && alpha.length == 26 &&
      (new Set(alpha)).size == 26
  }

  function encodeChar(char, alphabet) {
    if (!orderedAlpha.includes(char)) {
      return char
    }
    const targetIdx = orderedAlpha.indexOf(char.toLowerCase())
    return alphabet[targetIdx]
  }

  function decodeChar(char, alphabet) {
    if (char === " ") {
      return char
    }
    const targetIdx = alphabet.indexOf(char)
    return orderedAlpha[targetIdx]
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!isValid(alphabet)) {
      return false
    }
    let answerStr = ''
    const codec = encode ? encodeChar : decodeChar
    for (const char of input) {
      answerStr += codec(char, alphabet)
    }
    return answerStr
  }

  return {
    substitution,
  };
})();

module.exports = {
  substitution: substitutionModule.substitution
};
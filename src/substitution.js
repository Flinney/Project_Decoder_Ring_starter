// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  //create alphabetical list including capitals to reference for idx
  const orderedAlpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // helper function that tests if substitution string is valid. Uses Set object to check for uniques
  function isValid(alpha) {
    return alpha && alpha.length == 26 &&
      (new Set(alpha)).size == 26
  }
  // Helper function that encodes a single character, matching index of alphabet to index of substitution.
  // If the character is a space or special character, it will simply return that character
  function encodeChar(char, alphabet) {
    if (!orderedAlpha.includes(char)) {
      return char
    }
    const targetIdx = orderedAlpha.indexOf(char.toLowerCase())
    return alphabet[targetIdx]
  }
  // Helper function that decodes a single character, matching index of substitution with idx of alphabet
  // If the character is a space, the space is returned
  function decodeChar(char, alphabet) {
    if (char === " ") {
      return char
    }
    const targetIdx = alphabet.indexOf(char)
    return orderedAlpha[targetIdx]
  }

  function substitution(input, alphabet, encode = true) {
    // First checks for valid substitution with early return if not valid
    if (!isValid(alphabet)) {
      return false
    }
    //creat answer str after making check (Saves memory)
    let answerStr = ''
    //determine which helper function to use, assigning to codec var
    const codec = encode ? encodeChar : decodeChar
    //loop over characters within input.
    for (const char of input) {
      //Execute helper function on each individual character and push the result to answer string.
      //Big O time is increased, but orderedAlpha and substitution are at most 52 characters long.
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
// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function isValid(alpha) {
    if (alpha.length != 26) {
      return false
    }
    const checkSet = new Set()
    for (char of alpha) {
      if (checkSet.has(char)) {
        return false
      }
      checkSet.add(char)
    }
    return true
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = {
  substitution: substitutionModule.substitution
};
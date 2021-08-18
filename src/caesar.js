// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // Create alpha string for reference
  const alpha = "abcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
    // your solution code here
    // Checking for proper shift amount with early return, then create answer string
    if (shift === 0 || shift < -25 || shift > 25) {
      return false
    }
    let answerStr = ""
    // If decoding, flip shift value in opposite direction.
    if (!encode) {
      shift *= -1
    }
    // Loop over indices of input string
    for (let i = 0; i < input.length; i++) {
      // Force lower case on letters, then find idx of letter on alpha str.
      // If char is not a letter, pushes char to answer str.
      const currentIdx = alpha.indexOf(input[i].toLowerCase())
      if (currentIdx === -1) {
        answerStr += input[i]
        continue
      }
      // Add shift value to idx to get the desired idx.
      // If shift pushes idx outside of range, subtract or add 26 to wrap around to opposite end.
      const targetIdx = currentIdx + shift
      if (targetIdx > 25) {
        answerStr += alpha[targetIdx - 26]
      } else if (targetIdx < 0) {
        answerStr += alpha[26 + targetIdx]
      } else {
        answerStr += alpha[targetIdx]
      }
    }
    return answerStr
  }

  return {
    caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar
};
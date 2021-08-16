// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alpha = "abcdefghijklmnopqrstuvwxyz"

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift === 0 || shift < -25 || shift > 25) {
      return false
    }
    let answerStr = ""
    if (!encode) {
      shift *= -1
    }
    for (let i = 0; i < input.length; i++) {
      const currentIdx = alpha.indexOf(input[i].toLowerCase())
      if (currentIdx === -1) {
        answerStr += input[i]
        continue
      }
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
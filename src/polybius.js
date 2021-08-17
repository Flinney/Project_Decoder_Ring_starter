// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const cipher = {
    11: 'a',
    21: 'b',
    31: 'c',
    41: 'd',
    51: 'e',
    12: 'f',
    22: 'g',
    32: 'h',
    42: 'i/j',
    52: 'k',
    13: 'l',
    23: 'm',
    33: 'n',
    43: 'o',
    53: 'p',
    14: 'q',
    24: 'r',
    34: 's',
    44: 't',
    54: 'u',
    15: 'v',
    25: 'w',
    35: 'x',
    45: 'y',
    55: 'z'
  }
  const cipherArr = Object.entries(cipher)
  cipherArr.push([42, 'i'])
  cipherArr.push([42, 'j'])


  function polybius(input, encode = true) {
    // your solution code here
    const nonSpaceCharCount = input.split(' ').reduce((acc, ele) => acc += ele.length, 0)
    let answerStr = ''
    if (!encode && nonSpaceCharCount % 2 != 0) {
      return false
    } else if (!encode) {
      let cipherKey = ''
      for (const char of input) {
        if (char === ' ') {
          answerStr += char
        } else if (cipherKey.length > 0) {
          cipherKey += char
          answerStr += cipher[parseInt(cipherKey)]
          cipherKey = ''
        } else {
          cipherKey += char
        }
      }
      return answerStr
    } else {
      for (char of input) {
        if (char === ' ') {
          answerStr += char
          continue
        }
        const encoded = cipherArr.filter(subArr => subArr.includes(char))[0]
        answerStr += encoded[0]
      }
      return answerStr
    }

  }

  return {
    polybius,
  };
})();

module.exports = {
  polybius: polybiusModule.polybius
};
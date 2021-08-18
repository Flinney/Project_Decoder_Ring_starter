// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //Create cipher object linking unique number to letter
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
  //create array of keys and values using object. Push separate key value pairs for i and j for reference.
  const cipherArr = Object.entries(cipher)
  cipherArr.push([42, 'i'])
  cipherArr.push([42, 'j'])


  function polybius(input, encode = true) {
    // Create count of input characters, not including spaces. Also create answer string
    const nonSpaceCharCount = input.split(' ').reduce((acc, ele) => acc += ele.length, 0)
    let answerStr = ''
    // Checking for proper decode string with early return 
    if (!encode && nonSpaceCharCount % 2 != 0) {
      return false
    } else if (!encode) {
      // If decoding, creates a key string to look up in cipher object
      let cipherKey = ''
      // Loops over characters in input. If space, pushes space to answer. If not, pushes number to key 
      //string. If it's the second digit in key string, the key stings is converted to a number, and 
      //referenced in cipher object to access proper letter to add to answer string. Resets key string 
      //for next iteration
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
      // If encoding, pushes space to answer first, then filters through cipher array for key/value
      // subarray that has the character to encode. Then pushes corresponding number to answer string
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
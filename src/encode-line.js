const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return ''
  }
  let count = 1;
  let result = "";
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i-1]) {
      count++;
    } else {
      result += count + str[i-1];
      count = 1;
    }
  }
  result += count + str[str.length-1];
  return result.replace(/1/g , '')
}

module.exports = {
  encodeLine
};

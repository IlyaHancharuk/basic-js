const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let count = 0
  let digit = ''
  let str = String(n)
  for (let i = 0; i < str.length; i++) {
    digit = str.slice(0, i) + str.slice(i + 1, str.length)
    console.log(digit);
    if (digit >= count) {
      count = digit
    }
  }
  return Number(count)
}

module.exports = {
  deleteDigit
};

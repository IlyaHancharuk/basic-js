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
  let acc = ''
  let factor = 1
  let res = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i - 1]) {
      acc = str[i]
    } else {
      acc = str[i]
      factor++
    }
    if ( str[i] !== str[i + 1]) {
      res = res + factor + acc
      factor = 1
    }
  }
  return res.replace(/1/g, '')
}

module.exports = {
  encodeLine
};

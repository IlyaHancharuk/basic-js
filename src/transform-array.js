const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }

  let transformArr = arr.slice(0)
  transformArr.forEach((item, index, arr) => {
    if (item === '--double-next' && arr[index + 1] !== undefined) {
      arr.splice(index, 1, arr[index + 1])
    } else if (item === '--double-next' && arr[index + 1] === undefined ) {
      arr.splice(index, 1) 
    } else if (item === '--double-prev' && arr[index - 1] !== undefined ) {
      arr.splice(index, 1, arr[index - 1])
    } else if (item === '--double-prev' && arr[index - 1] === undefined ) {
      arr.splice(index, 1)
    } else if (item === '--discard-prev' && arr[index - 1] !== undefined) {
      arr[index - 1] = null
      arr[index] = null
    } else if (item === '--discard-prev' && arr[index - 1] === undefined) {
      arr.splice(index, 1)
    } else if (item === '--discard-next' && arr[index + 1] !== undefined) {
      arr[index] = null
      arr[index + 1] = null
    } else if (item === '--discard-next' && arr[index + 1] === undefined) {
      arr.splice(index, 1)
    }
  })
  return transformArr.filter(el => el !== null)
}

module.exports = {
  transform
};

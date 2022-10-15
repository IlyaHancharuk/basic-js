const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let stack = []
  if (!Array.isArray(members)) {
    return false
  }
  members.forEach((item, index) => {
    if (typeof(item) === 'string') {
      stack.push(item.trim()[0].toUpperCase())
    }
  })
  return stack.sort((a, b) => a > b ? 1 : -1).join('')
}

module.exports = {
  createDreamTeam
};

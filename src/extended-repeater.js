const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addStr

  if (!options.hasOwnProperty('repeatTimes')) {
    options.repeatTimes = 1
  }

  if (!options.hasOwnProperty('additionRepeatTimes')) {
    options.additionRepeatTimes = 1
  }

  if (!options.hasOwnProperty('addition')) {
    addStr = ''
  } else if (!options.hasOwnProperty('additionSeparator')) {
    addStr = (String(options.addition) + '|').repeat(options.additionRepeatTimes).slice(0, -1)
  } else {
    addStr = (String(options.addition) + options.additionSeparator).repeat(options.additionRepeatTimes).slice(0, -(options.additionSeparator.length))
  }

  if (!options.hasOwnProperty('separator')) {
    return (String(str) + addStr + '+').repeat(options.repeatTimes).slice(0, -1)
  } else {
    return (String(str) + addStr + options.separator).repeat(options.repeatTimes).slice(0, -(options.separator.length))
  }
}

module.exports = {
  repeater
};

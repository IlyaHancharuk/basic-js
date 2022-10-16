const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    value = String(value)

    if (value) {
      this.chain.push(`( ${value} )`)
    } else {
      this.chain.push(' ')
    }
    return this
  },
  removeLink(position) {
    if (Number.isFinite(position) && Number.isInteger(position) && this.chain[position - 1] !== undefined && position > 0) {
      this.chain.splice(position - 1, 1)
      return this
    } else {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
  },
  reverseChain() {  
    this.chain.reverse()
    return this
  },
  finishChain() { 
    let result = this.chain.join('~~')
    this.chain = []
    return result
  }
}

module.exports = {
  chainMaker
};

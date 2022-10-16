const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(directMachine = true) {
    this.directMachine = directMachine
  }

  encrypt(message, key) {
    const {directMachine} = this

    if (!message || !key) throw new Error('Incorrect arguments!')
  
    let factor = Math.ceil(message.length / key.length)
    key = key.repeat(factor).toUpperCase()
    message = message.toUpperCase()
    
    let keyArr = key.split('')
  
    for (let i = 0; i < message.length; i++) {
      if (message[i] === ' ') {
        keyArr.splice(i, 0, ' ')
      } 
    }
    let modKey = keyArr.join('')
  
    let codeA = 'A'.charCodeAt(0)
    let abcCount = 26
  
    let result = []
  
    for (let i = 0; i < message.length; i++) {
      if (!message[i].match(/[a-z]/i)) {
        result.push(message[i])
      } else {
        let letterIdx = message.charCodeAt(i) - codeA
        let shift = modKey.charCodeAt(i) - codeA;
  
        result.push(
          String.fromCharCode( codeA + (letterIdx + shift) % abcCount )
        )
      }
    }
    return directMachine ? result.join('') : result.reverse().join('')
  }
  
  decrypt(encryptedMessage, key) {
    const {directMachine} = this

    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!')
  
    let factor = Math.ceil(encryptedMessage.length / key.length)
    key = key.repeat(factor).toUpperCase()
    encryptedMessage = encryptedMessage.toUpperCase()
    
    let keyArr = key.split('')
  
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i] === ' ') {
        keyArr.splice(i, 0, ' ')
      } 
    }
    let modKey = keyArr.join('')
  
    let codeA = 'A'.charCodeAt(0)
    let abcCount = 26
  
    let result = []
  
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (!encryptedMessage[i].match(/[a-z]/i)) {
        result.push(encryptedMessage[i])
      } else {
        let letterIdx = encryptedMessage.charCodeAt(i) - codeA
        let shift = modKey.charCodeAt(i) - codeA;
  
        result.push(
          String.fromCharCode( codeA + (letterIdx - shift + abcCount) % abcCount )
        )
      }
    }
    return directMachine ? result.join('') : result.reverse().join('')
  }
}


module.exports = {
  VigenereCipheringMachine
};

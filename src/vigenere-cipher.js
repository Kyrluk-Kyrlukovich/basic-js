const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!(message && key)) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (this.alphabet.includes(char)) {
        const messageIndex = this.alphabet.indexOf(char);
        const keyIndexValue = this.alphabet.indexOf(key[keyIndex % key.length]);
        const encryptedChar =
          this.alphabet[(messageIndex + keyIndexValue) % 26];

        result.push(encryptedChar);
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    let encryptedMessage = result.join("");
    return this.isDirect
      ? encryptedMessage
      : encryptedMessage.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Invalid arguments!");

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      let char = encryptedMessage[i];

      if (this.alphabet.includes(char)) {
        const messageIndex = this.alphabet.indexOf(char);
        const keyIndexValue = this.alphabet.indexOf(key[keyIndex % key.length]);
        const decryptedChar =
          this.alphabet[(messageIndex - keyIndexValue + 26) % 26];

        result.push(decryptedChar);
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    let decryptedMessage = result.join("");
    return this.isDirect
      ? decryptedMessage
      : decryptedMessage.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

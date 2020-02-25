class VigenereCipheringMachine {
    constructor(bool = true) {
        this.bool = bool;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new Error('Error');
        }
        let result = [];
        let t = 0;
        for (let i = 0; i < message.length; i++) {
            message = message.toUpperCase();
            key = key.toUpperCase();
            if((message[i].match(/[A-Z]/))) {
                if (message.indexOf(message[i]) <  0) {
                    result.push(String.fromCodePoint((message[i].charCodeAt(0) - 'A'.charCodeAt(0) + (26 - (key[t % key.length].charCodeAt(0) - 'A'.charCodeAt(0)))) % 26 + 'A'.charCodeAt(0)));
                } else {
                    result.push(String.fromCodePoint((message[i].charCodeAt(0) - 'A'.charCodeAt(0) + (key[t % key.length].charCodeAt(0) - 'A'.charCodeAt(0))) % 26 + 'A'.charCodeAt(0)));
                }
                t++;
            } else {
                result.push(message[i]);
            }
      }
      return (this.bool === false) ? result.reverse().join('') : result.join('');
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined){
             throw new Error('Error');
    }   
        let result = [];
        let t = 0;
        for (let i = 0; i < encryptedMessage.length; i++) {
            encryptedMessage = encryptedMessage.toUpperCase();
            key = key.toUpperCase();
            if((encryptedMessage[i].match(/[A-Z]/))) {
                if (encryptedMessage.indexOf(encryptedMessage[i]) <  0) {
                    result.push(String.fromCodePoint((encryptedMessage[i].charCodeAt(0) - 'A'.charCodeAt(0) + (key[t % key.length].charCodeAt(0) - 'A'.charCodeAt(0))) % 26 + 'A'.charCodeAt(0)));
                } else {
                    result.push(String.fromCodePoint((encryptedMessage[i].charCodeAt(0) - 'A'.charCodeAt(0) + (26 - (key[t % key.length].charCodeAt(0) - 'A'.charCodeAt(0)))) % 26 + 'A'.charCodeAt(0)));
                }
                t++;
            } else {
                result.push(encryptedMessage[i]);
            }
        }
        return (this.bool === false) ? result.reverse().join('') : result.join('');
      }
        
}
module.exports = VigenereCipheringMachine;
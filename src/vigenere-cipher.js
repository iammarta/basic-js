class VigenereCipheringMachine {
    constructor(direct = true, reverse){
        this.direct = direct;
        this.reverse = reverse;
    }
    encrypt(message, key) {
        if(message == undefined || key == undefined ){
            throw new Error('Error');
        }
    }

    decrypt(encryptedMessage, key) {
        if(encryptedMessage == undefined || key == undefined){
            throw new Error('Error');  
    }
    }
}

module.exports = VigenereCipheringMachine;

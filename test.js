var crypto = require('aquajs-crypto');

var AquaJsCrypto = new crypto();

var plainText = 'testing is done' ;

var encryptedVal = AquaJsCrypto.encryptText(plainText ,'hello world' , 'aes-256-ctr') ;

console.log(encryptedVal);

var decryptedVal = AquaJsCrypto.decryptText(encryptedVal,'hello world' , 'aes-256-ctr')


console.log(decryptedVal);

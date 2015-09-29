"use strict";

var path = require('path'),
    crypto = require('crypto'),
    fs = require('fs'),
    zlib = require('zlib');

/**
 * AquaJS Crypto used to encrypt, decrypt, encode and decode the text based on the encryption key
 */

var AquaJsCrypto = function () {
}

var defaultAlgo = 'aes-256-ctr' ;

AquaJsCrypto.prototype.encryptText = function (inputText,encryptKey,algorithm) {
    var cipher = crypto.createCipher(algorithm || defaultAlgo ,encryptKey);
    var crypted = cipher.update(inputText,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;

};

AquaJsCrypto.prototype.decryptText = function (inputText,encryptKey,algorithm) {
    var decipher = crypto.createDecipher(algorithm || defaultAlgo,encryptKey)
    var dec = decipher.update(inputText,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
};

AquaJsCrypto.prototype.encryptBuffer = function (inputBuffer,encryptKey,algorithm) {
    var cipher = crypto.createCipher(algorithm || defaultAlgo ,encryptKey)
    var crypted = Buffer.concat([cipher.update(inputBuffer),cipher.final()]);
    return crypted;

};

AquaJsCrypto.prototype.decryptBuffer = function (inputFile,encryptKey,algorithm) {
    var decipher = crypto.createDecipher(algorithm || defaultAlgo ,encryptKey)
    var dec = Buffer.concat([decipher.update(inputBuffer) , decipher.final()]);
    return dec;
};


AquaJsCrypto.prototype.encode = function () {
    // will be undefined if init not called first
};

AquaJsCrypto.prototype.decode = function () {
    // will be undefined if init not called first
};


module.exports = AquaJsCrypto;


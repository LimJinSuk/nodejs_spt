var crypto = require('crypto');

//  Create Hash
// var shahash = crypto.createHash('sha1');
var shahash = crypto.createHash('sha256');
shahash.update('hashcode');

//  Print Out Hash
console.log(shahash.digest('hex'));

var secret = "mysecret";
var inputString = "somepassword";

//  Encoding Example
console.log('Original input String:', inputString);
var cipher = crypto.createCipher('aes192', secret);
cipher.update(inputString, 'utf8', 'base64');
var ciphered = cipher.final('base64');
console.log('aes192 ciphered:', ciphered);

//  Decoding Example
var decipher = crypto.createDecipher('aes192', secret);
decipher.update(ciphered, 'base64', 'utf8');
var deciphered = decipher.final('utf8');
console.log('aes192 deciphered:', deciphered);
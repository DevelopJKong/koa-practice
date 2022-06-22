const sha512 = require('hash.js/lib/hash/sha/512');
const value = sha512().update('1234').digest('hex');
console.log(value);
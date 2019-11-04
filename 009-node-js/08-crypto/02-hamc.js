const crypto = require('crypto')

const hmac = crypto.createHmac('sha512','aa')

hmac.update('123456');

console.log(hmac.digest('hex'))
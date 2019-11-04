const crypto = require('crypto')

//=>算法不可逆
// const hash = crypto.createHash('md5');
// const hash = crypto.createHash('sha256')
const hash = crypto.createHash('sha512')
//需要加密的明文
hash.update('12345');
//输出后的密码
console.log(hash.digest('hex'))
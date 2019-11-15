const crypto = require('crypto')

module.exports = (str)=>{
	const hmac = crypto.createHmac('sha512','aasdf')

	hmac.update(str);

	return hmac.digest('hex')

}
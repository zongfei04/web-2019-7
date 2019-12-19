

module.exports = {
	valData:function(value,type){
		//非空验证
		if(type == 'require'){
			return !!value
		}
		//用户名验证
		if(type == 'username'){
			return /^[a-z][a-z0-9_]{2,5}$/ig.test(value)
		}
		//密码验证
		if(type == 'password'){
			return /^\w$/.test(value)
		}
	}
}
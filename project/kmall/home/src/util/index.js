
var Hogan = require('hogan.js')

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
		//验证手机号
		if(type == 'phone'){
			return /^1[35678]\d{9}$/.test(value)
		}
		//邮箱验证
		if(type == 'email'){
			return /^\w+@\w+\.\w{2,6}$/.test(value)
		}
	},
	showErr:function(msg){
		alert(msg)
	},
	showSuccess:function(msg){
		alert(msg)
	},
	showAload:function(){
		window.location.href = '/user-login.html?redirect='+encodeURIComponent(window.location.href)
	},
	getParams:function(key){
		var query = window.location.search.substr(1)
		var reg = new RegExp('(^|&)'+key+'='+'([^&]*)(&|$)') 
		var result = query.match(reg)
		return result ? decodeURIComponent(result[2]) : null
	},
	render:function(tpl,data){
		var template = Hogan.compile(tpl);
		var html = template.render(data);
		return html
	}
}
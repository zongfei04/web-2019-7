require('./index.css')

require('pages/common/logo/index.js')
require('pages/common/footer/index.js')

var _util = require('util')

var page = {
	init:function(){
		this.bindEvent()
	},
	bindEvent:function(){
		const _this = this
		$('#btn-submit').on('click', function(){
			_this.submit()
		})
		//回车键获取键盘值
		$('input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submit()
			}
		})
		
	},
	submit:function(){
		//获取表单数据
		var fromData = {
			username:$('[name="username"]').val(),
			password:$('[name="password"]').val(),
		}

		//对数据进行验证
		var valDataResult = this.valData(fromData)
		//验证通过发送ajax
		if(valDataResult.status){
			$.ajax({
				url:'/sessions/users',
				method:'post',
				dataType:'json',
				data:fromData,
				success:function(result){
					console.log(result)
				},
				error:function(err){
					console.log(err)
				}
			})
		}

	},
	valData:function(fromData){
		var result = {
			status:false,
			msg:''
		}
		//验证
		//非空验证
		if(!_util.valData(fromData.username,'require')){
			result.msg='用户名不能为空'
			return result
		}
		//用户名验证
		if(!_util.valData(fromData.username,'username')){
			result.msg='用户名格式不正确'
			return result
		}
		//非空验证
		if(!_util.valData(fromData.password,'require')){
			result.msg='密码不能为空'
			return result
		}
		//用户名验证
		if(!_util.valData(fromData.password,'username')){
			result.msg='密码格式不正确'
			return result
		}





		result.status = true
		return result
	}
	
}



$(function(){
	page.init()
})
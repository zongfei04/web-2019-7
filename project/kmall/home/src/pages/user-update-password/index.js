require('./index.css')

require('pages/common/logo/index.js')
require('pages/common/footer/index.js')

require('pages/common/nav/index.js')
var nav = require('pages/common/search/index.js')
require('pages/common/footer/index.js')
 var _side = require('pages/common/side/index.js')

var _util = require('util')

var api = require('api')


var fromErr = {
	show:function(msg){
		$('.error-item').show()
		$('.error-item')
		.find('.error-msg')
		.text(msg)
	},
	hide:function(){
		$('.error-item').hide()
		$('.error-item')
		.find('.error-msg')
		.text('')
	}
}

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
		//监听用户名失去焦点判断用户名是否存在
		$('[name="username"]').on('blur',function(){
			var username = $.trim($(this).val())
			//发送之前判断用户名是否为空和用户名的合法性
			if(!_util.valData(username,'require')){
				return
			}
			//用户名验证
			if(!_util.valData(username,'username')){
				return
			}
			api.checkUsername({
				data:{
					username:username
				},
				success:function(){
					fromErr.hide()
				},
				error:function(err){
					fromErr.show(err)
				}
			})
		})

		
	},
	submit:function(){
		//获取表单数据
		var fromData = {
			username:$('[name="username"]').val(),
			password:$('[name="password"]').val(),
			repassword:$('[name="repassword"]').val(),
			phone:$('[name="phone"]').val(),
			email:$('[name="email"]').val(),
		}
		//对数据进行验证
		var valDataResult = this.valData(fromData)
		//验证通过发送ajax
		if(valDataResult.status){
			fromErr.hide()
			api.register({
				data:fromData,
				success:function(data){
					window.location.href='/result.html'

				},
				error:function(msg){
					fromErr.show(msg)
				}
			})
		}
		else{//验证不通过，显示错误
			fromErr.show(valDataResult.msg)
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
		//两次密码验证
		if(fromData.password != fromData.repassword){
			result.msg='两次密码输入不一致'
			return result
		}
		//手机号非空验证
		if(!_util.valData(fromData.phone,'require')){
			result.msg='手机号不能为空'
			return result
		}
		//用户名验证
		if(!_util.valData(fromData.phone,'phone')){
			result.msg='手机号格式不正确'
			return result
		}
		//邮箱非空验证
		if(!_util.valData(fromData.email,'require')){
			result.msg='邮箱不能为空'
			return result
		}
		//用户名验证
		if(!_util.valData(fromData.email,'email')){
			result.msg='邮箱格式不正确'
			return result
		}
		result.status = true
		return result
	}
}
$(function(){
	page.init()
})
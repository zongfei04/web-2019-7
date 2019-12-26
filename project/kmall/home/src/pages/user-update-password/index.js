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
		this.renderSide()
	},
	renderSide:function(){
		_side.render('user-update-password')
	},
	bindEvent:function(){
		const _this = this
		$('#btn-submit').on('click', function(){
			_this.submit()
		})
		//回车键获取键盘值
		$('.side-content input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submit()
			}
		})	
	},
	submit:function(){
		//获取表单数据
		var fromData = {
			password:$('[name="password"]').val(),
			repassword:$('[name="repassword"]').val(),
		}
		//对数据进行验证
		var valDataResult = this.valData(fromData)
		//验证通过发送ajax
		if(valDataResult.status){
			fromErr.hide()
			api.updateUsers({
				data:{
					password:fromData.password
				},
				success:function(data){
					window.location.href='/result.html?type=updatePassword'

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
		if(!_util.valData(fromData.password,'require')){
			result.msg='密码不能为空'
			return result
		}
		//密码验证
		if(!_util.valData(fromData.password,'username')){
			result.msg='密码格式不正确'
			return result
		}
		//两次密码验证
		if(fromData.password != fromData.repassword){
			result.msg='两次密码输入不一致'
			return result
		}
		result.status = true
		return result
	}
}
$(function(){
	page.init()
})
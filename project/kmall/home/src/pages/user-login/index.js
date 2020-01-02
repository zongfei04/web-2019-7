require('./index.css')

require('pages/common/logo/index.js')
require('pages/common/footer/index.js')

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
			fromErr.hide()
			api.login({
				data:fromData,
				success:function(data){
					window.location.href = _util.getParams('redirect') || '/'

				},
				error:function(msg){
					fromErr.show(msg)
				}
			})
			//发送ajax
			/*
			$.ajax({
				url:'/sessions/users',
				method:'post',
				dataType:'json',
				data:fromData,
				success:function(result){
					if(result.code == 0){
						window.location.href = '/'

					}else{
						fromErr.show(result.message)
						// $('.error-item').show()
						// $('.error-item')
						// .find('.error-msg')
						// .text(result.message)
					}
				},
				
				error:function(err){
					fromErr.show('网络错误，请稍后再试')
					/*$('.error-item').show()
					$('.error-item')
					.find('.error-msg')
					.text('网络错误，请稍后再试')*/
		}
		else{//验证不通过，显示错误
			/*
			$('.error-item').show()
			$('.error-item')
			.find('.error-msg')
			.text(valDataResult.msg)
			*/
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





		result.status = true
		return result
	}
	
}



$(function(){
	page.init()
})
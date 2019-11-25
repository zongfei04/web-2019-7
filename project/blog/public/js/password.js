;(function($){
	$formPassword = $('.form-password')
	$('#password-btn').on('click',function(){
		
		$err = $('.err')
		//获取信息
		var password = $formPassword.find('[name=password]').val()
		var repassword = $formPassword.find('[name=repassword]').val()
		//验证密码信息，密码必须是以字母开头的3-10位字符
		regpass = /^\w{3,6}$/
		if(!regpass.test(password)){
			$('.err').eq(0).html('密码必须是以字母开头的3-10位字符')
			return false
		}
		else{
			$('.err').eq(0).html('')
		}
		if(repassword != password){
			$('.err').eq(1).html('两次密码输入不一致')
			return false
		}
		else{
			$err.eq(1).html('')
		}
		
	})
})(jQuery);
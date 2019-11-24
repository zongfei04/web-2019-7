;(function($){
	$('#password-btn').on('click',function(){
		$formPassword = $('.form-password')
		//获取信息
		var username = $formPassword.find('[name=password]').val()
		var password = $formPassword.find('[name=repassword]').val()
		console.log(username,password)
	})
})(jQuery);
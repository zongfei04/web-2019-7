;(function($){
	//登录注册面版切换
	$login = $('#login')
	$register = $('#register')
	//登录->注册
	$('#go-register').on('click',function(){
		$login.hide()
		$register.show()
	})
	//注册->登录
	$('#go-login').on('click',function(){
		$login.show()
		$register.hide()
	})
	//2.用户注册页面
	//点击注册，发送请求
	$('#sub-register').on('click',function(){
		//2.1获取注册信息
		var username = $('#register').find('[name=username]').val()
		var password = $('#register').find('[name=password]').val()
		var repassword = $('#register').find('[name="repassword"]').val()
		//2.2验证注册信息
		//验证用户名信息 用户名信息要是以字母开头，内容为下划线，字母和数字在3到10位以内
		
		reguser = /^$/
		
	})
	
	
	
	//2.3如果合法，发送ajax

})(jQuery);
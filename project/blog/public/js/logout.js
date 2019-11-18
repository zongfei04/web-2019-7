;(function($){
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout',
			type:'GET'
		})
		.done(function(data){
			if(data.code == 0){
				window.location.href = '/'
			}
		})
		.fail(function(err){
			$userInfo.find('.err').html('请求失败，请稍后再试')
		})
	})
})(jQuery)
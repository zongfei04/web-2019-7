;(function($){
	$('#detail-sub').on('click',function(){
		var val = $('#detail-content').val().trim()
		var $err = $('.err')
		if(val == ''){
			$err.html('请输入内容后再提交')
		}
		else if(val.length >10){
			$err.html('输入内容不能超过10个字,请重新输入')
		}
		else{//输入成功，发送ajax请求
			$.ajax({
				url:'/comment/add',
				type:'post',
				dataType:'json',
			})

		}
	})
})(jQuery);
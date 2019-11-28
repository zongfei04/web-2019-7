;(function($){
	$('#detail-sub').on('click',function(){
		var val = $('#detail-content').val().trim()
		var $err = $('.err')
		if(val == ''){
			$err.html('请输入内容后再提交')
		}
		else{
			$err.html('')
		}
		if(val.length >10){
			$err.html('输入内容不能超过10个字,请重新输入')
		}
		else{
			$err.html('')
		}
		//输入成功，发送ajax请求
		//发送评论内容需要知道是哪一篇文章，因此获取id
		const id = $(this).data('id')
			$.ajax({
				url:'/comment/add',
				type:'post',
				dataType:'json',
				data:{
					content:val,
					article:id

				}
			})
			.done(data=>{
				console.log(data)
			})
			.fail(err=>{
				console.log('评论失败，请稍后再试')
			})
	})
})(jQuery);
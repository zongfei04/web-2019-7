(function($){
	var $input = $('.todo-input');

	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			//发送ajax请求，添加数据
			$.ajax({
				url:'add',
				type:'post',
				dataType:'json',
				data:{
					task:$input.val()
				},
				success:function(result){
					var data = result.data;
					if(result.code == 0){
						var $dom = $(`<li class="todo-item">${data.task}</li>`)
						$('.todo-list').append($dom);
						$input.val('')
					}
	
					//根据后台返回数据做出不同处理
				},
				error:function(err){
					console.log(err)
				}
			})
		}
	})
})(jQuery)
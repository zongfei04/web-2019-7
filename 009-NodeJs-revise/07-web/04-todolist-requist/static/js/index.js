(function($){
	var $input = $('.todo-input');
	//进行添加数据
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
						var $dom = $(`<li class="todo-item" data-id = "${data.id}">${data.task}</li>`)
						$('.todo-list').append($dom);
						$input.val('')
					}
				},
				error:function(err){
					console.log(err)
				}
			})
		}
	})
	//删除数据（利用事件委托的方式进行事件的删除）
	$('.todo-list').on('click','.todo-item',function(){
		var $this = $(this)
		$.ajax({
			url:'delete',
			dataType:'json',
			data:{
				id:$this.data('id')
			},
			success:function(message){
				console.log(message)
				$this.remove()
			},
			error:function(message){
				console.log(data.message)
			}
		})
		
	})
})(jQuery)
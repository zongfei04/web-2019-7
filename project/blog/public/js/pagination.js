


;(function($){
	$.fn.extend({
	pagination:function(options){

		$elem = $(this)
		$elem.on('click','a',function(){
			$this = $(this)
			//获取当前页
			var carrentPage = $elem.find('.active a').html()*1
			//根据当前页计算出点击的页码
			var page = 0
			var label = $this.attr('aria-label')
			if(label == 'Next'){
				page = carrentPage + 1
			}
			else if(label == 'Previous'){
				page = carrentPage - 1
			}
			else{
				page = $this.html()*1
			}
			//如果点击当前页，阻止发送请求
			if(page == carrentPage){
				return false
			}
			//发送ajax请求
			var url = options.url+'?page='+page
			var id = $elem.data("id")
			if(id){
				url = url +'&id='+id
			}
			$.ajax({
				url:url,
				type:'get',
				dataType:'json'

			})
			.done(function(result){
				//获取到了数据，为了后面的每个数据都能够触发，设置触发事件，把数据分离出去
				$elem.trigger('get-data',result.result)
			})
			.fail(function(err){
				console.log(err)
			})
		})


	}
})
})(jQuery);
/*
* @Author: TomChen
* @Date:   2019-03-13 18:10:45
* @Last Modified by:   TomChen
* @Last Modified time: 2019-03-13 18:52:43
*/
;(function($){
	$('.del').on('click',function(){
		if(!window.confirm('你确定要删除这条记录吗')){
			return false
		}
	})
})(jQuery);
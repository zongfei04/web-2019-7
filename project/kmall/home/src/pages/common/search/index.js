require('./index.css')

require('pages/common/logo/index.js')
require('pages/common/footer/index.js')

var _util = require('util')

var api = require('api')




var page = {
	init:function(){
		this.bindEvent()
	},
	bindEvent:function(){
		const _this = this
		$('#btn-search').on('click', function(){
			_this.submit()
		})
		//回车键获取键盘值
		$('input').on('keyup',function(ev){
			if(ev.keyCode == 13){
				_this.submit()
			}
		})
		
	},
	submit:function(){
		var keyword = $.trim($('#search-input').val())
		//跳转到列表页
		window.location.href = './list.html?keyword='+keyword
		
	}
}



$(function(){
	page.init()
})

require('./index.css')

require('pages/common/nav/index.js')
var nav = require('pages/common/search/index.js')
require('pages/common/footer/index.js')
 var _side = require('pages/common/side/index.js')

 var api = require('api')

 var _util = require('util')

 var tpl = require('./index.tpl')


var page = {
	init:function(){
		this.renderSide()
		this.loadUserInfo()
	},
	renderSide:function(){
		_side.render('user-center')
	},
	loadUserInfo:function(){
		api.getUserInfo({
			success:function(data){
				var html = _util.render(tpl,data)
				$('.side-content').html(html)
			},
			error:function(err){
				alert(err)
			}


		})

	}

}

$(function(){
	page.init()
})
require('./index.css')
var api = require('api')

var _util = require('util')

var page = {
	init:function(){
		this.loadUsername()
		this.logout()
		return this
	},
	logout:function(){
		$('#logout').on('click',function(){
			api.getLogout({
				success:function(){
					window.location.reload()
				},
				error:function(){
					_util.showErr()
				}

			})
		})
		
	},
	loadUsername:function(){
		api.getUsername({
			success:function(result){
				$('.not-login').hide()
				$('.login').
				show()
				.find('.username')
				.text(result.username)
			}
		})
	}
}
module.exports = page.init()
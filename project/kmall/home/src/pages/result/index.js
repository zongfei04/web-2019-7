require('./index.css')

require('pages/common/logo/index.js')
require('pages/common/footer/index.js')

var _util = require('util')

var api = require('api')

$(function(){
	var type = _util.getParams('type') || 'default'
	$('.'+type).show()
})
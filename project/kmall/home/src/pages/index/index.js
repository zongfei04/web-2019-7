
require('./index.css')

var nav = require('pages/common/nav/index.js')
var nav = require('pages/common/search/index.js')
console.log(nav)
require('pages/common/footer/index.js')

var api = require('api')

var _util = require('util')

require('node_modules/swiper/css/swiper.css')

var categoriesTpl = require('./categories.tpl')

import Swiper from 'swiper'

var page = {
	init:function(){
		//从后台获取数据
		this.loadHomeCategories()
		//集成swiper环境
		this.loadSwiper()
	},
	loadHomeCategories:function(){
		//加载首页分类数据
		api.getCategories({
			success:function(categories){
				console.log(categories)
				var html = _util.render(categoriesTpl,{
					categories
				})
				$('.categories').html(html)
			}
		})
	},
	loadSwiper:function(){
		var mySwiper = new Swiper ('.swiper-container', {
	    loop: true, // 循环模式选项
	    autoplay:true,//设置自动切换
	    
	    // 如果需要分页器
	    pagination: {
	      el: '.swiper-pagination',
	      //点击下方三个按钮设置
	      clickable :true,
	    },
	    
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	  })       
	}
}
$(function(){
	page.init()
})


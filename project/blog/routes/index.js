var express = require('express')
var router = express.Router()

//设置首页
router.get('/', (req, res) => {
	//获取cookie信息并返回数据
	
	res.render('main/index',{
		userInfo:req.userInfo
	})
})
//设置列表页
router.get('/list', (req, res) => {
	res.render('main/list',{
		userInfo:req.userInfo
	})
})
//设置详情页
router.get('/detail', (req, res) => {
	res.render('main/detail',{
		userInfo:req.userInfo
	})
})

module.exports = router
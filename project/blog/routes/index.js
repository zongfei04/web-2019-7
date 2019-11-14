var express = require('express')
var router = express.Router()

//设置首页
router.get('/', (req, res) => {
	res.render('main/index')
})
//设置列表页
router.get('/list', (req, res) => {
	res.render('main/list')
})
//设置详情页
router.get('/detail', (req, res) => {
	res.render('main/detail')
})

module.exports = router
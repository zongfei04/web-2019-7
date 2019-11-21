var express = require('express')
var router = express.Router()
const categoryModle = require('../modles/category.js')

//获取共通前台列表
async function getData(){
	const categories = await categoryModle.find({},'name').sort({order:-1})
	return {
		categories,
	}

}




//设置首页
router.get('/', (req, res) => {
	//获取cookie信息并返回数据
	getData()
	.then(data=>{
		const { categories } = data
		res.render('main/index',{
			userInfo:req.userInfo,
			categories
		})
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
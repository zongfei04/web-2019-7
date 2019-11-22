var express = require('express')
var router = express.Router()
const categoryModle = require('../modles/category.js')
const articleModle = require('../modles/article.js')

//获取共通前台列表
async function getData(){
	//获取顶部导航分类
	const categories = await categoryModle.find({},'name').sort({order:-1})
	//获取点击排行榜
	const topclicks = await articleModle.find({},'title click').sort({click:-1}).limit(10)
	return {
		categories,
		topclicks
	}

}



//设置首页
router.get('/', (req, res) => {
	//获取cookie信息并返回数据
	articleModle.getPaginationData(req)
	.then(result=>{
		getData()
		.then(data=>{
			const { categories,topclicks } = data
			res.render('main/index',{
				userInfo:req.userInfo,
				categories,
				topclicks,
				//返回分页数据
				articles:result.docs,
				page:result.page,
				list:result.list,
				pages:result.pages,
				url:'/'
			})
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
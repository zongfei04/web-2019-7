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
router.get('/list/:id', (req, res) => {
	const id = req.params.id
	articleModle.getPaginationData(req,{category:id})
	.then(result=>{
		getData()
		.then(data=>{
			const { categories,topclicks } = data
			res.render('main/list',{
				userInfo:req.userInfo,
				categories,
				topclicks,
				//返回分页数据
				articles:result.docs,
				page:result.page,
				list:result.list,
				pages:result.pages,
				url:'/',
				articleCategoryId:id
			})
		})
	})
})
//设置详情页
router.get('/detail', (req, res) => {
	res.render('main/detail',{
		userInfo:req.userInfo
	})
})
//设置分页逻辑ajax
router.get('/articles',(req,res)=>{
	let id = req.query.id
	console.log(id)
	let query = {}
	if(id){
		query = {category:id}
	}
	articleModle.getPaginationData(req,query)
	.then(result=>{
		res.json({
			code:0,
			message:'获取文章成功',
			result:result
		})
	})
	.catch(err=>{
		res.json({
			code:10,
			message:'获取文章失败'
		})
	})
})
module.exports = router
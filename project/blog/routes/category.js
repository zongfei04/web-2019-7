var express = require('express')
var router = express.Router()
const categoryModle = require('../modles/category.js')
const pagination = require('../util/pagination.js')

//设置管理员权限
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}
	else{
		res.send('<h2>请输入管理员账号</h2>')
	}
})


//显示分类列表首页
router.get('/', (req, res) => {
	
	const options = {
		page:req.query.page * 1,
		modle:categoryModle,
		query:{},
		projection:'-__v',
		sort:{order:1}

	}
	pagination(options)
	.then(result=>{
		res.render('admin/category',{
			userInfo : req.userInfo,
			categories:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/category'
		})
	})
	.catch(err=>{
		console.log(err)
	})

})
//显示新增分类首页
router.get('/add', (req, res) => {
	
	res.render('admin/category_edit_add',{
		userInfo:req.userInfo
	})
})
//处理新增分类提交数据
router.post('/add',(req,res)=>{
	//1.获取参数
	let {name,order} = req.body
	
	if(!order){
		order = 0
	}
	
	//2.查找数据库进行同名验证
	categoryModle.findOne({name:name})
	.then(category=>{
		if(category){//里面有数据
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'数据已存在',
			})
		}
		else{//没有数据
			categoryModle.insertMany({name,order})
			.then(result=>{
				res.render('admin/ok',{
					userInfo:req.userInfo,
					message:'添加数据成功',
					url:'/category'
				})
			})
			.catch(err=>{
				res.render('admin/err',{
				userInfo:req.userInfo,
				message:'数据库操作失败',
				})
			})

		}
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库操作失败',
		})
	})
	//3.插入数据
})
//处理编辑分类首页

router.get('/edit/:id', (req, res) => {
	const id = req.params.id
	//查找数据库获取对应分类
	categoryModle.findById(id)
	.then(category=>{
		res.render('admin/category_edit_add',{
			userInfo:req.userInfo,
			category
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库操作失败',
		})
	})	
})	

//处理编辑分类提交
router.post('/edit',(req,res)=>{
	//1.获取参数
	var {id,name,order} = req.body

	if(!order){
		order = 0
	}
	
	//2.根据id获取该跳数据
	categoryModle.findById(id)
	.then(category=>{
		if(category.name == name && category.order == order){//数据没有更改
			res.render('admin/err',{
				userInfo:req.userInfo,
				message:'数据没有更该'
			})
		}
		else{//数据更改
			categoryModle.findOne({name:name,_id:{$ne:id}})
			.then(category=>{//编辑的数据有与其他数据相同的，不能操作
				if(category){
					res.render('admin/err',{
						userInfo:req.userInfo,
						message:'数据中有重名数据',
					})
				}
				else{//数据进行更新
					categoryModle.updateOne({_id:id},{name,order})
					.then(data=>{
						res.render('admin/ok',{
							userInfo:req.userInfo,
							message:'数据操作成功',
							url:'/category'
						})
					})
					.catch(err=>{
						res.render('admin/err',{
						userInfo:req.userInfo,
						message:'数据库操作失败',
						})
					})

				}
			})
		}
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库操作失败',
		})
	})
})

//处理分类列表的删除
router.get('/delete/:id',(req,res)=>{
	//获取id
	const id = req.params.id
	//通过id在数据库中删除数据
	categoryModle.deleteOne({_id:id})
	.then(category=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'删除数据成功',
			url:'/category'
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'删除数据失败',
			url:'/category'
		})
	})
})

module.exports = router
var express = require('express')
var router = express.Router()
const articleModle = require('../modles/article.js')
const categoryModle = require('../modles/category.js')
const pagination = require('../util/pagination.js')

var multer  = require('multer')
//dest表示将图片等资源存在后台对应文件下面
var upload = multer({ dest: 'public/uploads/' })

//设置管理员权限
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}
	else{
		res.send('<h2>请输入管理员账号</h2>')
	}
})


//显示文章列表首页
router.get('/', (req, res) => {
	/*
	const options = {
		page:req.query.page * 1,
		modle:articleModle,
		query:{},
		projection:'-__v',
		sort:{_id:1},
		populates:[{path: 'author', select: 'username'},{path: 'category', select: 'name'}]
	}
	pagination(options)
	.then(result=>{
		res.render('admin/article',{
			userInfo : req.userInfo,
			articles:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/article'

		})
	})
	.catch(err=>{
		console.log(err)
	})
	*/
	articleModle.getPaginationData(req)
	.then(result=>{
		res.render('admin/article',{
			userInfo : req.userInfo,
			articles:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/article'

		})
	})
})



//显示新增文章首页
router.get('/add', (req, res) => {
	//首先获取所有的分类名称，将分类名称传递给模板
	categoryModle.find({})
	.then(categories=>{
		res.render('admin/article_add_edit',{
			userInfo:req.userInfo,
			categories
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库获取数据失败，请稍后再试',
		})
	})	
})
//处理新增文章提交数据
router.post('/add',(req,res)=>{
	//1.获取参数
	let {category,title,intro,content} = req.body
			articleModle.insertMany({
				category,
				title,
				intro,
				content,
				author:req.userInfo._id
			})
			.then(result=>{
				res.render('admin/ok',{
					userInfo:req.userInfo,
					message:'添加数据成功',
					url:'/article'
				})
			})
			.catch(err=>{
				res.render('admin/err',{
					userInfo:req.userInfo,
					message:'数据插入失败',
					url:'/article'
				})
			})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库操作失败'
		})
	})
	//3.插入数据
})
//处理上传照片
//upload表示前台存的字段的名称
router.post('/uploadImg', upload.single('upload'),(req,res)=>{
	const uploadFilePath = '/uploads/' + req.file.filename
	res.json({
		uploaded:true,
		url:uploadFilePath
	})
})











//处理编辑文章首页

router.get('/edit/:id', (req, res) => {
	const id = req.params.id
	//查找数据库获取对应分类
	categoryModle.find({})
	.then(categories=>{
		articleModle.findById(id)
		.then(article=>{
			res.render('admin/article_add_edit',{
				userInfo:req.userInfo,
				categories,
				article
			})
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'数据库操作失败',
		})
	})	
})	

//处理编辑文章提交
router.post('/edit',(req,res)=>{
	//1.获取参数
	var {category,title,intro,content,id} = req.body

	//2.根据id获取该跳数据
	articleModle.updateOne({_id:id},{category,title,intro,content,id})
		.then(data=>{
			res.render('admin/ok',{
				userInfo:req.userInfo,
				message:'文章更新成功',
				url:'/article'
			})
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
	articleModle.deleteOne({_id:id})
	.then(category=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'删除数据成功',
			url:'/article'
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'删除数据失败',
			url:'/article'
		})
	})
})

module.exports = router
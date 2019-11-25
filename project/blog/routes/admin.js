var express = require('express')
var router = express.Router()
const userModel = require('../modles/user.js')
const pagination = require('../util/pagination.js')
const hmac = require('../util/hmac.js')

//设置管理员权限
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}
	else{
		res.send('<h2>请输入管理员账号</h2>')
	}
})


//设置管理员中心
router.get('/', (req, res) => {
	
	res.render('admin/index',{
		userInfo : req.userInfo
	})
})
//显示用户列表
router.get('/users',(req,res)=>{
	//获取用户信息渲染模板
	/*进行数据分页
		前提：想要进行分页必须知道页码，由前台page传入
		约定：每一页显示几条数据，limit = 2
	*/
	/*
	let limit = 2;
	let page = req.query.page * 1;

	if(isNaN(page)){
		page = 1
	}
	//上一边界控制
	if(page == 0){
		page = 1
	}
	//下一边界控制
	userModel.countDocuments((err,count)=>{
		const pages = Math.ceil(count/limit)
		if(page > pages){
			page = pages
		}
		//由于swig无法对数字进行遍历循环，因此需要在后台生成页码

		let list = []
		for(let i = 1;i<=pages;i++){
			list.push(i)
		}
		let skip = (page - 1)*limit
		userModel.find({},'-password,-__v')
		.sort({_id:-1})
		.skip(skip)
		.limit(limit)
		.then((users)=>{
			res.render('admin/user_list',{
			userInfo : req.userInfo,
			users:users,
			page:page,
			list:list,
			pages:pages
			})
		})
		.catch((err)=>{
			console.log(err)
		})

	})
	*/
	/*
	page:当前显示的页码
	modle:需要操作的文档
	query:需要查询的条件
	projection:隐藏的字段信息
	sort:排序
	*/

	const options = {
		page:req.query.page * 1,
		modle:userModel,
		query:{},
		projection:'-password,-__v',
		sort:{_id:-1}

	}
	pagination(options)
	.then(result=>{
		res.render('admin/user_list',{
			userInfo : req.userInfo,
			users:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/admin/users'
		})
	})
	.catch(err=>{
		console.log(err)
	})	
	
})
//文章评论管理
router.get('/comment',(req,res)=>{
	res.render('admin/comment_list',{
		userInfo : req.userInfo
	})
})


//设置密码列表
router.get('/password',(req,res)=>{
	res.render('admin/password',{
		userInfo : req.userInfo
	})
})
//处理密码提交
router.post('/password',(req,res)=>{
	const { password } = req.body
	//通过查找相同的id对密码进行修改
	userModel.updateOne({_id:req.userInfo._id},{password:hmac(password)})
	.then(data=>{
		//清除cookie
		req.session.destroy()
		//返回首页
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'修改密码成功',
			url:'/'
		})
	})
	.catch(err=>{
		res.render('admin/err',{
			userInfo:req.userInfo,
			message:'修改密码失败，请稍后再试',
		})
	})
})

module.exports = router
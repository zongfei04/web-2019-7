var express = require('express')
var router = express.Router()
const categoryModle = require('../modles/category.js')

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
	
	res.render('admin/category',{
		userInfo : req.userInfo
	})
})
//显示新增分类首页
router.get('/add', (req, res) => {
	
	res.render('admin/category_add',{
		userInfo : req.userInfo
	})
})
//处理新增分类提交数据
router.post('/add',(req,res)=>{
	//1.获取参数
	const {name,order} = req.body
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
	

module.exports = router
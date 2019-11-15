var express = require('express')
const userModel = require('../modles/user.js')
const hmac = require('../util/hmac.js')
var router = express.Router()


//处理注册
router.post('/register', (req, res) => {
	//获取注册参数信息
	const {username,password} = req.body
	
	//查找数据库同名验证
	userModel.findOne({username:username})
	.then((user)=>{
		if(user){//该用户名已经存在，不能插入用户
			res.json({
				code:10,
				message:'该用户名已经存在，不能插入用户'
			})

		}
		else{//可以插入用户名
			userModel.insertMany({
				username:username,
				password:hmac(password)
			})
			.then((result)=>{
				res.json({
					code:0,
					message:'注册成功',
					result:result
				})
			})
			.catch((err)=>{
				res.json({
					code:10,
					message:'注册失败，请重新操作'
				})
			})

		}
	})
	.catch((err)=>{
		res.json({
			code:10,
			message:'数据库请求失败，请稍后再试'
		})
	})

	//插入数据
})
//处理登录
router.post('/login', (req, res) => {
	//获取注册参数信息
	const {username,password} = req.body
	
	//查找数据库同名验证
	userModel.findOne({username:username,password:hmac(password)},'-password')
	.then((user)=>{
		if(user){//该用户名已经存在
			res.json({
				code:0,
				message:'登录成功',
				user:user
			})

		}
		else{//用户名不存在
			res.json({
				code:10,
				message:'用户名或密码不正确'
			})
		}
	})
	.catch((err)=>{
		res.json({
			code:10,
			message:'数据库请求失败，请稍后再试'
		})
	})

	//插入数据
})

module.exports = router
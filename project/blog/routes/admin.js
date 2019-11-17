var express = require('express')
var router = express.Router()

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
	
	res.send('good admin')
})

module.exports = router
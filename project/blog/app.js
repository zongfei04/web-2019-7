const express = require('express')
const app = express()

const swig = require('swig')

const mongoose = require('mongoose')
//处理post请求参数
const bodyParser = require('body-parser')
//引入cookie
const Cookies = require('cookies')

const session = require('express-session')

const MongoStore = require("connect-mongo")(session);

//处理静态文件
app.use(express.static('public'))
/*处理post请求参数开始*/
//解析json
app.use(bodyParser.json());
//解析urlencoded内容
app.use(bodyParser.urlencoded({ extended: false }));
/*处理post请求参数结束*/

//1.连接数据库
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true,useUnifiedTopology: true })
//获取db对象
mongoose.set('useFindAndModify',false)
const db = mongoose.connection
//连接数据库失败
db.on('error', () => {
    console.log('connection db error')
    throw 'connection db error'
})
db.once('open', () => {
	console.log('connection mongoose is success')
})
//配置路由

//渲染模块
//1.设置缓存
//开发阶段设置不走缓存
swig.setDefaults({
  cache: false
})
//2.配备应用模板
app.engine('html', swig.renderFile);

//3.配置模板的存放目录
app.set('views', './views')

//4.注册引擎模板
app.set('view engine', 'html')


//使用中间件对cookie进行操作
/*
app.use((req,res,next)=>{
	req.cookies = new Cookies(req,res);
	let userInfo = ''
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	req.userInfo = userInfo

	next()
})
*/

app.use(session({
    //设置cookie名称
    name:'kzid',
    //用它来对session cookie签名，防止篡改
    secret:'abc',
    //强制保存session即使它并没有变化
    resave: true,
    //强制将未初始化的session存储
    saveUninitialized: true, 
    //如果为true,则每次请求都更新cookie的过期时间
    rolling:true,
    //cookie过期时间 1天
    cookie:{maxAge:1000*60*60*24},
    //设置session存储在数据库中
    store:new MongoStore({ mongooseConnection: mongoose.connection })    
}))
app.use((req,res,next)=>{
	req.userInfo = req.session.userInfo || {}
	next()
})





//5.设置路由
app.use('/',require('./routes/index.js'))
app.use('/user',require('./routes/user.js'))
app.use('/admin',require('./routes/admin.js'))
app.use('/category',require('./routes/category.js'))
app.use('/article',require('./routes/article.js'))

app.listen(3000, () => console.log('server is running at http://127.0.0.1:3000!'))
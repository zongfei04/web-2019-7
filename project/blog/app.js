const express = require('express')
const app = express()

const swig = require('swig')

const mongoose = require('mongoose')



//处理静态文件
app.use(express.static('public'))



//1.连接数据库
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true,useUnifiedTopology: true })
//获取db对象
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

//5.设置路由
app.use('/',require('./routes/index.js'))

app.listen(3000, () => console.log('server is running at http://127.0.0.1:3000!'))
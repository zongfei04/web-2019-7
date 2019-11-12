const express = require('express')
const app = express()

const swig = require('swig')

//处理静态文件
app.use(express.static('public'))

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

//5.渲染模板
app.get('/',(req,res)=>{
    //4.渲染模板
    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据
    res.render('index')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
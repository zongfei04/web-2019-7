const express = require('express')
const app = express()

//处理静态文件
app.use(express.static('public'))

app.all('/',function(req,res,next){
	console.log('all do something')
	next()
})
//虚拟路径
// app.use('/base',express.static('blog'))

app.get('/', (req, res) =>{
	// res.end('hello world')
	// res.end('<h1>hello world</h1>')
	/*res.end({name:'tom',age:18})//end不能解析对象*/
	// res.json('hello world')
	/*res.json('<h1>hello world</h1>') //json不能解析出正确的标签*/
	//res.json({name:"tom",age:18})
	// res.send('hello world')
	// res.send('<h1>hello world</h1>')
	res.send({name:"tom",age:18})
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
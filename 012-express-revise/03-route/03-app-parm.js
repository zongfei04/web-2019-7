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
	console.log(req.query.name)
	res.send(req.query.name)
	// res.send('get is success')
})

app.get('/user/:userId/book/:bookId',(req,res)=>{
	console.log(req.params)
	res.send('get is success')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
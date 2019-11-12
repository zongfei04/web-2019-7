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

app.get('/', (req, res) => res.send('get is success'))
app.post('/', (req, res) => res.send('post is success'))
app.put('/', (req, res) => res.send('put is success'))
app.delete('/', (req, res) => res.send('delete is success'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
const express = require('express')
const app = express()

//处理静态文件
app.use(express.static('public'))

app.use('/',(req,res,next)=>{
	console.log('do something a')
	next()
})
app.use('/',(req,res,next)=>{
	console.log('do something b')
	next()
})
app.get('/', (req, res) => res.send('get  success'))
app.post('/', (req, res) => res.send('post  success'))
app.put('/', (req, res) => res.send('put  success'))
app.delete('/', (req, res) => res.send('delete  success'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))
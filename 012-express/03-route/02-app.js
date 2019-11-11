const express = require('express')

const app = express()

app.all('/',function(req,res,next){
	console.log('all something')
	next()
})
//处理静态资源
app.use(express.static('public'))

app.get('/', (req, res) => res.send('get is success'))
app.post('/', (req, res) => res.send('post is success'))
app.put('/', (req, res) => res.send('put is success'))
app.delete('/', (req, res) => res.send('delete is success'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
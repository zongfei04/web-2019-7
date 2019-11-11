const express = require('express')

const app = express()

app.all('/',function(req,res,next){
	console.log('all something')
	next()
})
//处理静态资源
app.use(express.static('public'))

app.get('/', (req, res) =>{
	console.log(req.query)
	res.send('get is success')
})
app.get('/users/:usersId/books/:bookId', (req, res) =>{
	console.log(req.params)
	res.send('get is success')
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
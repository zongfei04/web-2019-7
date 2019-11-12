const express = require('express')
const app = express()

const bodyParser = require('body-parser')

//处理静态文件
app.use(express.static('public'))

//解析json
app.use(bodyParser.json());
//解析urlencoded内容
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res) =>{
	console.log(req.body)
	res.send('post  success')
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))
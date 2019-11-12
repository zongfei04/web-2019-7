const express = require('express')
const app = express()

//处理静态文件
// app.use(express.static('public'))
//虚拟路径
app.use('/base',express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
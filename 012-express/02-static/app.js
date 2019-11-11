const express = require('express')

const app = express()

//处理静态资源
//app.use(express.static('public'))
app.use('/static', express.static('public'))

app.get('/', (req, res) => res.end('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
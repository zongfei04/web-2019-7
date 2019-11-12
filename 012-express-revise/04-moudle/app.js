const express = require('express')
const app = express()

const user = require('./route/user.js')
const blog = require('./route/blog.js')

//处理静态文件
app.use(express.static('public'))
//虚拟路径
// app.use('/base',express.static('blog'))
app.use('/user',user)
app.use('/blog',blog)

// app.get('/user', (req, res) => res.send('get user success'))
// app.post('/user', (req, res) => res.send('post user success'))
// app.put('/user', (req, res) => res.send('put user success'))
// app.delete('/user', (req, res) => res.send('delete user success'))
/*app.get('/blog', (req, res) => res.send('get blog success'))
app.post('/blog', (req, res) => res.send('post blog success'))
app.put('/blog', (req, res) => res.send('put blog success'))
app.delete('/blog', (req, res) => res.send('delete blog success'))*/

app.listen(3000, () => console.log('Example app listening on port 3000!'))
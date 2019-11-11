const express = require('express')

const app = express()

//处理静态资源
app.use(express.static('public'))

app.get('/get', (req, res) => res.send('get is success'))
app.post('/post', (req, res) => res.send('post is success'))
app.put('/put', (req, res) => res.send('put is success'))
app.delete('/delete', (req, res) => res.send('delete is success'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
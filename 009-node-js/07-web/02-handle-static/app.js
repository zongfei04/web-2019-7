const http = require('http')
const path = require('path')
const fs = require('fs')
const mime = require('./mime.json')

const server = http.createServer((req,res)=>{
	
	// console.log(req.url)
	//处理静态资源
	const filePath =req.url
	const filename = path.normalize(__dirname+'/static/'+filePath)
	// console.log(filename)
	fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
		if(err){
			// console.log(err)
			res.setHeader('Content-type','text/html;charset="utf-8"')
			res.statusCode = 404
			res.end('<h1>你请求的地址出错啦</h1>')
		}else{
			const extname = path.extname(req.url)
			const mimeType = mime[extname]
			// console.log(mimeType)
			res.setHeader('Content-type',mimeType+';charset="utf-8"')
			res.end(data)
		}
	})
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in http://127.0.0.1:3000')
})
const http = require('http')

const server = http.createServer((req,res)=>{
	console.log(req.url);
	console.log(req.method)
	res.write('China')
	res.end('ok')
})

server.listen(3000,'127.0.0.1',function(){
	console.log('server is running http://127.0.0.1:3000')
})
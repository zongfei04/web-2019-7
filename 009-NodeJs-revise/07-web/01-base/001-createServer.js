const http = require('http')

const server = http.createServer((req,res)=>{
	//req:=>可读流
	//res:=>可写流
	console.log(req.url)
	console.log(req.method)
	res.end('hello')
	res.end('ok')

})
server.listen(3000,'127.0.0.1',function(){
	console.log('server is running at http://127.0.0.1:3000')
})
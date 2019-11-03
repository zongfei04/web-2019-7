const http = require('http')

const server = http.createServer((req,res)=>{
	// res.end('ok')
	const filePath = req.url;
	const path = 
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running at http://127.0.0.1:3000')
})
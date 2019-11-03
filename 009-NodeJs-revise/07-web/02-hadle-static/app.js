const http = require('http')

const path = require('path')

const fs = require('fs');

const server = http.createServer((req,res)=>{

	const filePath = __dirname + req.url;
	// console.log(filePath)
	const filename = path.normalize(filePath)

	fs.readFile(filename,function(err,data){
		if(err){
			// res.setHeader('Content-type','text/html;charset="utf-8"')
			res.setHeader('Content-type','text/html;charset="utf-8"');
			res.statusCode = 404
			res.end('<h1>你的请求出错了</h1>')
		}
		else{
			res.end(data);
		}
	})

})
server.listen(3000,'127.0.0.1',function(){
	console.log('server is running at http://127.0.0.1:3000')
})
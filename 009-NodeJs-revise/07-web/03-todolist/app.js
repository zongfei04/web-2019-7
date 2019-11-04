const http = require('http')

const path = require('path')

const fs = require('fs');

const mime = require('./mime.json')

const server = http.createServer((req,res)=>{
	console.log(req.url)
	const filePath = __dirname +'/static/'+ req.url;
	// console.log(filePath)
	//用于绝对路径的设置
	const filename = path.normalize(filePath)

	fs.readFile(filename,{encoding:'utf-8'},function(err,data){
		if(err){
			// res.setHeader('Content-type','text/html;charset="utf-8"')
			res.setHeader('Content-type','text/html;charset="utf-8"');
			res.statusCode = 404
			res.end('<h1>你的请求出错了</h1>')
		}
		else{
			//根据请求的文件决定不同类型
			
			//获取文档的后缀名
			const pathexname = path.extname(req.url);
			// console.log(pathexname)
			//根据文档的后缀名决定不同的文档类型
			const typeName = mime[pathexname];
			console.log(typeName)
			res.setHeader('Content-type',typeName+';charset="utf-8"');
			res.end(data);
		}
	})

})
server.listen(3000,'127.0.0.1',function(){
	console.log('server is running at http://127.0.0.1:3000')
})
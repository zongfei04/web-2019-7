const http = require('http')

const path = require('path')

const fs = require('fs');

const mime = require('./mime.json')

const url = require('url');

const { get,add } = require('./model/item.js')

const swig = require('swig')

const querystring = require('querystring')

const server = http.createServer((req,res)=>{
	// console.log(req.url)
	//处理静态资源
	const pathname = url.parse(req.url,true).pathname
	


	//路由：根据不同的请求地址处理不同的逻辑

	if(pathname == '/' || pathname == '/index.html'){//请求首页
		//获取首页数据
		get()
		.then(data=>{
			// console.log(data)
			//引入模板处理数据
			const filename = path.normalize(__dirname +'/static/index.html')
			var template = swig.compileFile(filename);
			var html = template({
				data:data
			})
			res.setHeader('Content-type','text/html;charset="utf-8"');
			res.end(html);
		})
		.catch(err=>{
			res.setHeader('Content-type','text/html;charset="utf-8"');
			res.statusCode = 404
			res.end('<h1>你的请求出错了</h1>')
		})
	}
	else if(pathname == '/add'){//请求添加数据 post参数
		//1.获取参数信息
		var body = ''
		req.on('data',(chunk)=>{
			body +=chunk
		})
		req.on('end',()=>{
			//2.根据参数信息生成任务对象
			// console.log(body)
			const query = querystring.parse(body);
			// console.log(query)
			add(query.task)
			.then(data=>{
				res.end(JSON.stringify({
					code:0,
					message:'添加数据成功',
					data:data
				}))
			})
			.catch(err=>{
				res.end(JSON.stringify({
					code:1,
					message:'添加数据失败',
					data:err
				}))
			})
		})
		
		//3.如果成功将任务对象返回到前端

	}
	else if(pathname == '/delete'){//请求删除数据

	}
	else{//处理静态资源
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
				res.setHeader('Content-type',typeName+';charset="utf-8"');
				res.end(data);
			}
		})
	}
		
})
server.listen(3000,'127.0.0.1',function(){
	console.log('server is running at http://127.0.0.1:3000')
})
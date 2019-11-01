const http = require('http');

const fs = require('fs');

const url = require('url');

const server = http.createServer(function(req,res){
	// console.log(req.method);
	if(req.method == 'POST'){
		var body = "";
		req.on('data',function(chunk){
			body += chunk
		})
		req.on('end',function(){
			res.end(body);
		})
	}
	else if(req.method == 'GET'){
		if(req.url.search(/\?/) == -1){
			const filePath = './' + req.url;
			fs.readFile(filePath,function(err,data){
				if(err){
					res.statusCode = 404;
					res.end('Not fond!!!!')
				}
				else{
					res.end(data);
				}
			})
		}
		else{
			const parm = url.parse(req.url,true).query;
			// console.log(parm);
			var strToJSON = JSON.stringify(parm);
			res.end(strToJSON);
		}
		
	}
	else{
		res.end('ok');
	}
	
})
server.listen(3001,'127.0.0.1',function(){
	console.log("server is running at http://127.0.0.1:3001")
})
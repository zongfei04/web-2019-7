const http = require('http');

const fs = require('fs');

const server = http.createServer(function(req,res){
	// console.log(req.method);
	if(req.method == 'POST'){
		var body = "";
		req.on('data',function(chunk){
			body += chunk
		})
		req.on('end',function(){
			console.log(body);
			res.end(body);
		})
	}
	else if(req.method == 'GET'){
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
		res.end('ok');
	}
	
})

server.listen(3000,'127.0.0.1',function(){
	console.log("server is running at http://127.0.0.1:3000")
})
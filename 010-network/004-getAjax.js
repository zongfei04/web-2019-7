const http = require('http');

const fs = require('fs');

const server = http.createServer(function(req,res){

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
})

server.listen(3000,'127.0.0.1',function(){
	console.log("server is running at http://127.0.0.1:3000")
})
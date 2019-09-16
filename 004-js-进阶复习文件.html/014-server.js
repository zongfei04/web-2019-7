var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	//console.log(req.method);
	var urlStr = req.url;
	if(req.method == 'POST'){
		// res.end('post...')
		var body = '';
		req.on('data',function(chunk){
			body = body + chunk;
		});
		req.on('end',function(){
			console.log('get post data::',body);
			res.end(body);
		})
	}
	else if(req.method == 'GET'){
		if(urlStr == '/favicon.ico'){
			res.end('favicon.ico');
		}
		var filePath = './'+urlStr;
		fs.readFile(filePath,function(err,data){
			if(!err){
				res.end(data);
			}
			else{
				res.statusCode = 404;
				res.end('not fund');
			}
		})
	}	
});
server.listen(3000,'127.0.0.1',function(){
	console.log("server is running at http://127.0.0.1:3000")
});
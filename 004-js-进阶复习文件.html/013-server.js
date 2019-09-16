var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	console.log(req.url);
	var urlStr = req.url;
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
	
})
server.listen(3000,'127.0.0.1',function(){
	console.log("server is running at http://127.0.0.1:3000")
})
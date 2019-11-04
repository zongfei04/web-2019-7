const fs = require('fs');

//打开可读流
const rs = fs.createReadStream('./04-data.txt')
//获取可读流
rs.on('data',(chunk)=>{
	console.log(chunk)
})
//结束可读流
rs.on('end',function(){
	console.log('the data is end')
})
//关闭可读流
rs.on('close',function(){
	console.log('the data is close')
})
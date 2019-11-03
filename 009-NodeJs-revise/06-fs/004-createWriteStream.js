const fs = require('fs');

//打开可写流
const fd = fs.createWriteStream('./04-data.txt',{flag:'w',encoding:'utf-8'})
//写入可写流
fd.write('hello')
//结束可写流
fd.on('finish',function(){
	console.log('write is finish')
})
fd.end(' world')
//关闭可写流
fd.on('close',function(){
	console.log('write is close')
})
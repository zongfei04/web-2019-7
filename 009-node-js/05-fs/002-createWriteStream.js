const fs = require('fs');

//打开可写流
fs.createWriteStream('./02-dada.txt',{flag:'a'}); 
//写入流
// fs.write(123);
//结束可写流
//关闭可写流


const fs = require('fs');

//打开或者创建文件
const fm = fs.openSync('./01-data.txt','a')
//写入内容
fs.writeSync(fm,' world')
//保存并退出
fs.closeSync(fm)

//混合模式
fs.writeFileSync('./02-data.txt','hello',{flag:'a'})

// fs.writeFileSync('./01-test.txt','你好',{flag:"a"})
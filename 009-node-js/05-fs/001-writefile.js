

const fs = require('fs');
//打开文件
const fm = fs.openSync('./01-test.txt','a')
//写入文件
fs.writeSync(fm,'hello');
//保存退出文件
fs.closeSync(fm)

//混合模式
fs.writeFileSync('./01-test.txt','你好',{flag:"a"})
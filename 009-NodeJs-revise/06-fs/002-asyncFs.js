const fs = require('fs');

const util = require('util')
/*
//读取文件
fs.open('./03-data.txt','a',function(err,fd){
	if(err){
		console.log('open file is err')
	}
	else{
		//写入文件
		fs.write(fd,'你好',function(err){
			if(err){
				console.log('write file is err')
			}
			else{
				//关闭并且保存文件
				fs.close(fd,function(err){
					if(err){
						console.log('file is err')
					}
				})
			}
		})
	}
})
*/
//合并操作
/*
fs.writeFile('./03-data.txt','中国',{flag:'a'},function(err){
	if(err){
		console.log(err)
	}
})
*/
//promise异步操作写文件
const writeFile = util.promisify(fs.writeFile);
writeFile('./03-data.txt','1234',{flag:'a'})
.then(()=>{
	console.log('file is success')
})
.catch(err=>{
	console.log(err)
})

const fs = require('fs');

const util = require('util')
/*
//同步读文件
	//逐步操作
	//1.打开文件
		const fd = fs.openSync('./02-data.txt','r');
	//2.读取文件
		const buf = Buffer.alloc(10);
		fs.readSync(fd,buf,0,10,0);
		console.log(buf)


	//3.关闭文件
		fs.closeSync(fd);


	//合并操作

	const buf = fs.readFileSync('./02-data.txt',{flag:'r',encoding:'utf-8'});
	console.log(buf);
*/
/*
//异步读文件
  //逐步操作
  //1.打开文件
  fs.open('./02-data.txt','r',function(err,fd){
  	if(err){
  		console.log('openfile is err')
  	}
  	else{
  		const buf = Buffer.alloc(10);
		fs.read(fd,buf,0,10,0,function(err){
			if(err){
				console.log('readfile is err')
			}
			else{
				console.log(buf)
			}
		})
		//关闭文件
		fs.close(fd,function(err){
			if(err){
				console.log('file is err')
			}
			
		})
		
  	}
  })
*/
/*
  //异步操作读取文件
  fs.readFile('./02-data.txt',{flag:'r',encoding:'utf-8'},function(err,data){
  	if(err){
  		console.log('file is err')
  	}
  	else{
  		console.log(data)
  	}
  })
  */
 //利用promise异步读取文件
 const pr = util.promisify(fs.readFile);
 pr('./02-data.txt',{flag:'r',encoding:'utf-8'})
 .then(data=>{
 	console.log(data)
 })
 .catch(err=>{
 	console.log(err)

 })

const fs = require('fs');

const util = require('util')
//同步读文件
	/*
	//逐步操作
		//1.打开文件
		const fd = fs.openSync('./02-dada.txt','r');
		//2.读取文件
		const buf = Buffer.alloc(10);
		fs.readSync(fd,buf,0,5,0);
		console.log(buf)//68 65 6c 6c 6f
		buf[0] = 0X68;
		buf[1] = 0X65;
		buf[2] = 0X6C;
		buf[3] = 0X6C;
		buf[4] = 0X6F;
		console.log(buf.toString())
		//3.关闭文件
		fs.closeSync(fd);
	
	//混合操作
	const buf = fs.readFileSync('./02-dada.txt',{flag:'r',encoding:'utf-8'});
	console.log(buf)
	*/

//异步读文件
	/*
	//逐步操作
		//打开文件
		fs.open('./02-dada.txt','r',function(err,fd){
			if(err){
				console.log('the file is err',err)
			}
			else{
				//读取文件
				const buf = Buffer.alloc(10)
				fs.read(fd,buf,0,10,0,function(err){
					if(err){
						console.log('the file is err',err)
					}
					else{
						console.log(buf)
					}
					//关闭文件
					fs.close(fd,function(err){
						if(err){
							console.log('the file is err')
						}
					})
				})
				
			}
		})
		
	//混合操作
	fs.readFile('./02-dada.txt',{flag:'r',encoding:'utf-8'},function(err,data){
		if(err){
			console.log('the file is err',err)
		}
		else{
			console.log(data);
		}
	})
	*/

	//利用promise读取文件
	const pr = util.promisify(fs.readFile);
	pr('./02-dada.txt',{flag:'r',encoding:'utf-8'})
	.then(data=>{
		console.log(data)
	})
	.catch(err=>{
		console.log('the file is err',err)
	})
const {Readable} = require('stream')

/*
const reader = new Readable();

reader.on('data',(chunk)=>{
	console.log(chunk)
})
*/
class customRead extends Readable{
	constructor(){
		super()
		this.index = 0
	}
	_read(){
		this.index++;
		if(this.index<5){
			this.push(this.index+'')
		}
		else{
			this.push(null)
		}


	}
}
const reader = new customRead()
/*
//获取数据流程
//1.定义变量存数据
var body = ''
//2.监听数据获取数据
reader.on('data',(chunk)=>{
	body+=chunk
})
//3.读取数据
reader.on('end',()=>{
	console.log(body)
});
*/


//将可读流数据传递给可写流
reader.pipe(process.stdout)
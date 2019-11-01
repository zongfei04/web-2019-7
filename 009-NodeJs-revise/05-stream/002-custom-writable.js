const { Writable } = require('stream');

// console.log(Writable)
//const write = new Writable();//The _write() method is not implemented
class customStream extends Writable{
	_write(chunk,encoding,callback){
		console.log(chunk);
		console.log(encoding);
		callback();

	}
}

const write = new customStream();


write.write('hello',function(){
	console.log('write do something')
})
write.on('finish',function(){
	console.log('write something done...')
})
write.end('abcd')
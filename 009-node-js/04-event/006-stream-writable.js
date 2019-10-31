const { Writable } = require('stream');
// console.log(Writable);

class CustomStream extends Writable{
	 _write(chunk){
	 	console.log('chunk::',chunk)

	 }
}

const write = new CustomStream();

write.on('hello',function(){
	console.log('hello...')
})
write.write('hi',function(){
	console.log('hi...')
})



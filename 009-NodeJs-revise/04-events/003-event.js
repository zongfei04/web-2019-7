const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('show',function(arg1,arg2){
	console.log(arg1,arg2)
	console.log('show...')
})
myEmitter.on('show',function(){
	console.log('show1..')
})
const arr = [11,22]
myEmitter.emit('show',...arr);
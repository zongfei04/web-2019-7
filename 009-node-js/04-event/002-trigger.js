const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('show',function(arg1,arg2){
	console.log(arg1,arg2)
	console.log('do something...')
})
myEmitter.on('show',function(){
	console.log('next...')
})
// myEmitter.emit('show','aa','bb');
const arr = [23,34]
myEmitter.emit('show',...arr)
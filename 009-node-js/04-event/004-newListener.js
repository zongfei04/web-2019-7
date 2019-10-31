const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('newListener',function(Eventname,callback){
	console.log('Eventname;::',Eventname);
	callback()
	console.log('newListener...')
})
myEmitter.on('show',function(){
	console.log('show...')
})
myEmitter.on('test',function(){
	console.log('test...')
})
// myEmitter.on('newListener')
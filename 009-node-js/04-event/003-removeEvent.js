const EventEmitter = require('events');

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();


function listener1(){
	console.log('show1')
}
function listener2(){
	console.log('show2...')
}
myEmitter.on('show',listener1);
myEmitter.on('show',listener2);
// myEmitter.off('show',listener1);
myEmitter.removeListener('show',listener2)
/*
myEmitter.on('show',function(){
	console.log('show1...')
})
*/
myEmitter.emit('show');
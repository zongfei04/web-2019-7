const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

function listener1(){
	console.log('show....')
}
function listener2(){
	console.log('listener2...')
}
myEmitter.on('show1',listener1)
myEmitter.on('show1',listener2)

myEmitter.off('show1',listener1)
myEmitter.removeListener('show1',listener2)

myEmitter.emit('show1')
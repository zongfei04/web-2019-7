const EventEmitter = require('events');
//生成事件
class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();

//监听事件
myEmitter.on('test',function(){
	console.log('触发事件')
})
//触发事件
myEmitter.emit('test');

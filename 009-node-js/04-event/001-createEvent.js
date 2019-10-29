const EventEmitter = require('events');
// console.log(EventEmitter);
class MyEmitter extends EventEmitter{}
//生成事件触发器实例
const myEmitter = new MyEmitter();
//监听事件
myEmitter.on('test',function(){
	console.log('触发事件')
})
//触发事件
myEmitter.emit('test');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter();
/*
//on监听事件
myEmitter.on('test',()=>{
	console.log('test1')
})
myEmitter.on('test',()=>{
	console.log('test2')
})

//addListener监听事件
myEmitter.addListener('test',()=>{
	console.log('test3')
})
myEmitter.addListener('test',()=>{
	console.log('test4')
})

myEmitter.once('test',function(){
	console.log('test5')
})
myEmitter.once('test',function(){
	console.log('test6')
})
myEmitter.emit('test');
myEmitter.emit('test');
myEmitter.emit('test');
myEmitter.setMaxListeners(15)
myEmitter.on('test',function(){
	console.log('test1')
})
myEmitter.on('test',function(){
	console.log('test2')
})
myEmitter.on('test',function(){
	console.log('test3')
})
myEmitter.on('test',function(){
	console.log('test4')
})
myEmitter.on('test',function(){
	console.log('test5')
})
myEmitter.on('test',function(){
	console.log('test6')
})
myEmitter.on('test',function(){
	console.log('test7')
})
myEmitter.on('test',function(){
	console.log('test8')
})
myEmitter.on('test',function(){
	console.log('test9')
})
myEmitter.on('test',function(){
	console.log('test10')
})
myEmitter.on('test',function(){
	console.log('test11')
})
myEmitter.on('test',function(){
	console.log('test12')
})
myEmitter.on('test',function(){
	console.log('test13')
})
myEmitter.on('test',function(){
	console.log('test14')
})
myEmitter.on('test',function(){
	console.log('test15')
})

myEmitter.on('test',function(){
	console.log('test13')
})

myEmitter.emit('test');*/
console.log(myEmitter.on == myEmitter.addListener)
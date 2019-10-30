/*
const t1 = setTimeout(function(){
	console.log('t1...')
},0)
// clearTimeout(t1);
console.log('after t1..')

//延迟性定时器
const t2 = setInterval(function(){
	console.log('t2....')
},1000)
console.log('after t2..')
// clearInterval(t2);

const t3 = setImmediate(function(){
	console.log('t3....')
})
console.log('after t3...')
*/
const t4 = process.nextTick(function(){
	console.log('t4')
})
console.log('after t4...');
const t1 = setTimeout(function(){
	console.log('t1..');
})
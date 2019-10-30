/*
console.log(exports);
console.log(module.exports);
console.log(exports == module.exports);
*/
var str = 'hello world';
var obj = {
	name:'tom',
	age:18
}
var fn = function(){
	console.log('do something')
}
/*
exports.str = str;
exports.obj = obj;
exports.fn = fn;
*/
/*
module.exports.str = str;
module.exports.obj = obj;
module.exports.fn = fn;
*/
module.exports = {
	str,
	obj,
	fn
}

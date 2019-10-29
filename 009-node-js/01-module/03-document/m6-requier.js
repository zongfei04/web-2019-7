/*
var req = require('./m5-exports.js');
console.log(req.str);
console.log(req.obj);
console.log(req.fn);
req.fn();
*/
const {str,obj,fn} = require('./m5-exports.js')

console.log(str);
console.log(obj);
console.log(fn);
fn();

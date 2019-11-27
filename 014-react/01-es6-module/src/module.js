//console.log('this is module.js...')

//方法一：
/*
export const a = 1;
export const b = 2;
*/
//方法二
/*
const a = 1;
const b = 2;
export {a,b}
*/
//方法三
/*
const a = 1
export {a}
*/
//方法四
/*
const a = 1;
export {a as aa}
*/
//方法五
const a = 1
export default a
export const b = 2
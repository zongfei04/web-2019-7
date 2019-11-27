

//import只能调用一次
// import './module.js'
//方法一
/*
import {a,b} from './module.js'
console.log('a = ',a)
console.log('b = ',b)
console.log('this is index.js...')
*/
//方法二
/*
import {a,b} from './module.js'
console.log('a = ',a)
console.log('b = ',b)
*/
//方法三
/*
import {a as aa} from './module.js'
console.log('a =',a)
*/
//方法四
/*
import {aa} from './module.js'
console.log('a = ',aa)
*/
//方法五
import a,{b} from './module.js'
console.log('a = ',a)
console.log('b = ',b)
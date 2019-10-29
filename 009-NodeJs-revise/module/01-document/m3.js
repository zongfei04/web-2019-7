/*
//使用相对路径，但是不能省去‘./’这个当前路径，否则表示核心模块
const m1 = require('m1-document.js')
console.log(m1);

require的参数也可以使用绝对路径
const m1 = require('E:/web-2019-7/009-NodeJs-revise/module/01-document/m1-document.js')
console.log(m1);


const m4 = require('./m4');
console.log(m4);


const m5 = require('./m5');
console.log(m5);*/

//缓存优先
const m7 = require('./m7.js');
const _m7 = require('./m7.js');
console.log(_m7)
console.log(m7);
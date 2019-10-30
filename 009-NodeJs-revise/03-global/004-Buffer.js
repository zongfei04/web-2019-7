/*
var buf1 = Buffer.from('z');
console.log(buf1);
const buf2 = Buffer.from('宗');
console.log(buf2);
*/

const buf3 = Buffer.alloc(10);
// console.log(buf3);
buf3[0] = 45;
buf3[2] = 63;
console.log(buf3);

const buf4 = Buffer.alloc(3);//e5 ae 97
buf4[0] = 0Xe5;
buf4[1] = 0Xae;
buf4[2] = 0X97;
console.log(buf4.toString());

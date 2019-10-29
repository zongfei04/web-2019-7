
/*
const buf = Buffer.from('z');
console.log(buf);
const buf1 = Buffer.from('好');
console.log(buf1);

const buf2 = Buffer.alloc(10);
console.log(buf2);
buf2[0] = 0Xf2
console.log(buf2);
*/
//e5 a5 bd
var buf3 = Buffer.alloc(10);
console.log(buf3);
buf3[0] = 0Xe5;
buf3[1] = 0Xa5;
buf3[2] = 0Xbd;
console.log(buf3.toString());
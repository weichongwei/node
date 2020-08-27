const { Buffer } = require("buffer");

const buf =Buffer.alloc(10);
console.log(buf);

const buf1 = Buffer.from('hello world');
console.log(buf1);

const buf2 = Buffer.from([1,2,3]);
console.log(buf2);

buf.write('node')
console.log(buf);

console.log(buf1.toString('utf-8'));

const buf3 = Buffer.concat([buf,buf1]);
console.log(buf3.toString());



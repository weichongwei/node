const fs = require('fs');
//创建可读流
const readStream = fs.createReadStream('./readme.md');
//创建可写流
const writeStream = fs.createWriteStream('./test.txt');
//创建管道流
readStream.pipe(writeStream);
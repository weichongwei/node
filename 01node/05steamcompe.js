//压缩文件
const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');
const zip = zlib.createGzip();//创建压缩对象

fs.createReadStream('./test.txt').pipe(zip).pipe(fs.createWriteStream('./test.zip'));
console.log("文件压缩成功");

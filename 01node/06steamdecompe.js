//解压文件
const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');
const gunzip = zlib.createGunzip();//创建解压对象

fs.createReadStream('./test.zip').pipe(gunzip).pipe(fs.createWriteStream('./1.txt'));
console.log("文件解压成功");

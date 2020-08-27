//node.js 异步编程直接体现在回调函数上
//异步 不等待  非阻塞式IO操作
//优点 性能提高 处理大量并发请求

//阻塞式代码
// const fs = require('fs');
// const data = fs.readFileSync('./01runnode.js');
// console.log(data.toString());
// console.log("哈哈哈");

//非阻塞 异步
const fs = require('fs');
// fs.readFile('./01runnode.js','utf-8',(err,data)=>{
//    if (err) {
//        console.log(err.stack);
//        return;
//    }
//    console.log(data);
// })
// console.log("hahaha");
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

// async function asyncReadFile() {
//     try {
//         const data = await readFile('./01runnode.js', 'utf-8');
//         console.log(data);
//     } catch (err) {
//         console.log(err.stack);
//     }
// }
// asyncReadFile();

function* read() {
    yield readFile('./01runnode.js');
}
let geon = read();
geon.next().value.then((data) => {
    console.log(data.toString());
}).catch((err) => {
    console.log(err.stack);
})


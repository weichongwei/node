const express = require('express');
const fs = require('fs');
const app = express();
//中间件方法
//设置node_modules为静态资源目录
app.use(express.static('node_modules'));
app.get('/',(req,res)=>{
    fs.readFile('./index.html',(err,data)=>{
        if (err) {
            res.statusCode=500;
            res.send('500 - Interval Server Error!')
        }
        res.statusCode=200;
        res.setHeader('Content-Type','text/html');
        res.send(data);
    })
});
app.set('jsonp callback name','cb');
app.get('/user',(req,res)=>{
    res.jsonp({name:'魏崇伟'});
})
app.listen(3000);

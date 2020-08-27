const express = require('express');
const fs = require('fs');
const app = express();

//中间件方法
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Token');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Content-Type', 'application/json;chartset=utf-8');
    next();
});
//设置node_modules为静态资源目录
app.use(express.static('node_modules'));
app.get('/', (req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.send('500 - Interval Server Error!')
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    })
});
app.post('/login', (req, res) => {
    console.log(req.body);
    res.jsonp({ state:0,message:'登录成功' });
})
app.listen(3003);

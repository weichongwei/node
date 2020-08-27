const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');//http代理中间件
const app = express();
//代理服务器操作
//设置允许跨域访问
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Methods','*');
    res.header('Content-Type','application/json;chartset=utf-8');
    next();
  })
//中间件 筛选访问url时会将'/'前的源地址改为 http://localhost:3001
app.use('/',createProxyMiddleware({
    target:'http://localhost:3001',
    changeOrigin: true
}))
app.listen(8080);
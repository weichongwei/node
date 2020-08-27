//引入HTTP模块
const http = require('http');
const fs = require('fs');
//创建appServer对象
const app = http.createServer((req, res) => {
    const { url, method } = req;
    if (url === '/index' && method === 'GET') {
        fs.readFile('./static/index.html', 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('500 - Interval Server Error');
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html')
            res.end(data);
        })
    } else if (url === '/about' && method === 'GET') {
        fs.readFile('./static/about.html', 'utf-8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('500 - Interval Server Error');
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html')
            res.end(data);
        })
    } else if (req.headers.accept.indexOf('image/*') !== -1 && method == 'GET') {//返回图片
        console.log(url);
        fs.createReadStream(__dirname + url).pipe(res);
    } else if (url === '/user' && method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify([{name:'魏崇伟'}]));
    }
    else {
        res.end('hello world')
    }
    // console.log(req);
})
//监听端口号 http://localhost:3000/
app.listen(3000);
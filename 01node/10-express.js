const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/index',(req,res)=>{
    fs.readFile('./static/index.html', 'utf-8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('500 - Interval Server Error');
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.send(data);
    })
})
app.get('*',(req,res)=>{
    res.setHeader('Content-Type', 'image/*')
    fs.readFile(path.join(__dirname,req.url),(err,data)=>{
        if (err) {
            throw err;
        }
        res.send(data);
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const http = require('http')

const express = require('express')

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log("In the another Middleware!");
    res.send('<h1>Product page</h1>')
})

app.use('/add-post', (req, res, next) => {
    console.log("In the another Middleware!");
    res.send('<h1>Posts page</h1>')
})

app.use('/', (req, res, next) => {
    console.log("In the another Middleware!");
    res.send('<h1>Hello welcome to express server</h1>')
})

const server = http.createServer(app);

server.listen(3000)
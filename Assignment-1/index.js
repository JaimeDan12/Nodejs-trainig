const http = require('http');
const express = require('express');

const app = express();

app.use('/users', (req, res, next ) =>{
    console.log('Users route');
    res.send("Welcomme to our users page");
});

app.use('/', (req, res, next ) =>{
    console.log('Default route');
    res.send("Welcomme to our website");
});

const server = http.createServer(app);

server.listen(4000);
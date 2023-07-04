const http = require('http')

const express = require('express')

const app = express();

app.use((req, res, next) => {
    console.log("In the Middleware!");
    next(); // permet à la requete d'atteindre le middlware suivant
})

app.use((req, res, next) => {
    console.log("In the another Middleware!");
    res.send('<h1>Hello welcome to express server</h1>')
})

const server = http.createServer(app);

server.listen(3000)
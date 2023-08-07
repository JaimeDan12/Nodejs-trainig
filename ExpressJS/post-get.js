const http = require('http')
const bodyPrser = require('body-parser')
const express = require('express')
const fs = require('fs');

const app = express();

app.use(bodyPrser.urlencoded({
    extended: true,
}));

app.get('/add-product', (req, res, next) => {
    res.send('<h1>Products page</h1><form action="/product " method="POST"><input type=text name ="tittle"><button type=submit>Add product</button></form>')
})

app.use('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');

})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello welcome to express server</h1>')
    // celui qui reçoit tous les chemins, et doit toujours être en dernier des middleware
})

const server = http.createServer(app);

server.listen(3000)
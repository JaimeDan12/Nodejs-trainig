const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rootDir = require('./util/path')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:true,}));
app.use(express.static(path.join(__dirname, 'public'))); 

app.use('/admin', adminData.routes); //pas besoin de l'appeler avec () comme une fonction
app.use(shopRoutes);

app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.pug')); 
})

app.listen(3000);
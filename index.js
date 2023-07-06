const express = require('express');
const bodyPrser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyPrser.urlencoded({extended:true,}));

app.use(adminRoutes); //pas besoin de l'appeler avec () comme une fonction
app.use(shopRoutes);


app.listen(3000);
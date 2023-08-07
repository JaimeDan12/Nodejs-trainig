const path = require('path'); 
const rootDir = require('./util/path');
const express = require('express');

const mainRoute = require('./routes/main');

const app = express(); 

app.use(mainRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
})

app.listen(3000); 
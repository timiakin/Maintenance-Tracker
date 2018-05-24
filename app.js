const express = require('express');

const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const reqRoutes = require('./api/routes/products');


app.use('/', reqRoutes);


module.exports = app;

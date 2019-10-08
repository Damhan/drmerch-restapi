const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');

//Setup middleware

//Any /products requests go to productRoutes request handler.
app.use('/products', productRoutes);

module.exports = app;
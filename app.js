const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

//Setup middleware

//Any /products requests go to productRoutes request handler.
app.use('/products', productRoutes);
//Any /orders requests go to orderRoutes request handler.
app.use('/orders', orderRoutes);


module.exports = app;
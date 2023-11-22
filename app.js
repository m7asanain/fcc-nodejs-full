const express = require('express');
const { products } = require('./data');
const logger = require('./logger');
const authorize = require('./authorize');

const app = express();
const port = 3000;

// we have to put first thing
app.use(logger);

app.get('/', logger, (req, res) => {
    res.send('Home')
});

app.get('/about', logger, (req, res) => {
    res.send('About')
});

app.get('/api/products', logger, (req, res) => {
    res.send('Products')
});

app.get('/api/items', logger, (req, res) => {
    res.send('Items')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
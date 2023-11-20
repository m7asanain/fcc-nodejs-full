const express = require('express');
const app = express();
const { products } = require('./data');
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((products) => {
        const { id, name, image } = products;
        return { id, name, image };
    });
    res.json(newProducts);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
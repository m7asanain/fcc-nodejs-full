const express = require('express');
const app = express();
const { products } = require('./data');
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
});

// this for returning a specific item
// app.get('/api/products', (req, res) => {
//     const singleProduct = products.find((product) => product.id === 1);
//     res.json(singleProduct);
// });

app.get('/api/products/:productID', (req, res) => {
    const { productID } = req.params;

    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    );

    if (!singleProduct) {
        return res.status(404).send('Product does not exist!')
    }
    
    res.json(singleProduct);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
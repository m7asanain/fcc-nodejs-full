const express = require('express');
const app = express();
const { products } = require('./data');
const port = 3000;

app.get('/', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
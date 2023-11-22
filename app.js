const express = require('express');
let { people } = require('./data');

const app = express();
const port = 3000;

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
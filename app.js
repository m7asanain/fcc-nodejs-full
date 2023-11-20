const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// before all the 'get'
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found!</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
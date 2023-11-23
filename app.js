const express = require('express');
const people = require('./routes/people');
const auth = require('./routes/auth');


const app = express();
const port = 3000;

// static assets
app.use(express.static('./methods-public'));

// parse form data - middleware
app.use(express.urlencoded({ extended: false }));

// parse json 
app.use(express.json());

app.use('/api/people', people);

app.use('/login', auth);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
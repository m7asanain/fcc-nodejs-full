const express = require('express');
const people = require('./routes/people')

const app = express();
const port = 3000;

// static assets
app.use(express.static('./methods-public'));

// parse form data - middleware
app.use(express.urlencoded({ extended: false }));

// parse json 
app.use(express.json());

app.use('/api/people', people);

// moved it up
app.post('/login', (req, res) => {
    const { name } = req.body;

    if (name) {
        return res.status(200).send(`Welcom ${name}`);
    }

    res.status(401).send('Please provide Credentials');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
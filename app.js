const express = require('express');
let { people } = require('./data');

const app = express();
const port = 3000;

// static assets
app.use(express.static('./methods-public'));

// parse form data - middleware
app.use(express.urlencoded({ extended: false }));

// parse json 
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide and value.' });
    }

    res.status(201).json({ success: true, person: name });
});

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please provide and value.' });
    }
    res.status(201).send({ success: true, data: [...people, name] });
});

app.post('/login', (req, res) => {
    const { name } = req.body;

    if (name) {
        return res.status(200).send(`Welcom ${name}`);
    }

    res.status(401).send('Please provide Credentials');

    // if (req.body.name) {
    //     res.send(`Hello Mr. ${req.body.name}`);
    // } else {
    //     res.send('You must provid the information!');
    // }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
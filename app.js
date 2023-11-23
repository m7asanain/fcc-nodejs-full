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

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    
    const person = people.find((person) => person.id === Number(id));

    if (!person) {
        return res.status(404).json({ success: false, msg: `There is no person with this ${id} ID.` });
    } 

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })

    res.status(200).send({ success: true, data: newPeople });
});

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));

    if (!person) {
        return res.status(404).json({ success: false, msg: `There is no person with this ${req.params.id} ID.` });
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    
    return res.status(200).json({ success: true, data: newPeople });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
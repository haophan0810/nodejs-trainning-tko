const express  = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>hello nodejs and expressjs</h1>`);
});

app.get('/user', (req, res) => {
    res.send('Hao Phan');
});

app.listen(port, () => console.log(`hello express, server run on port ${port}`));


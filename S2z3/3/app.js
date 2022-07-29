const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

const forbiddenWords = ['alkohol', 'papierosy', 'sex'];

app.use(bodyParser.text());

app.get('/', (req, res) => {
    fs.readFile('data.txt', 'utf8', (error, data) => {
        res.send(data);
    })
});

app.get('/dictionary', (req, res) => {
    res.send(forbiddenWords);
});

app.post('/', (req, res) => {
    const hasForbiddenWord = forbiddenWords.some(word => req.body.includes(word));

    if (hasForbiddenWord) {
        res.status(400).send('forbidden word');
    } else {
        fs.writeFile('data.txt', req.body, () => {
            res.send('ok');
        });
    }
});

app.listen(4700, () => console.log('server started'));

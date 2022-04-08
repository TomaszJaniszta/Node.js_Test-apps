const express = require('express');
const app = express();

// wyłączeni zwracania nagłówka x-powered-by
app.disable('x-powered-by');

// pobieranie z parametrów URL
// http://localhost:4700
// http://localhost:4700/Jannode 
// http://localhost:4700/Anna
app.get('/:name?', (req, res) => {
    const name = req.params.name || 'world';
    res.send(`Hello ${name}`);
});

// pobieranie z query stringa
// http://localhost:4700/querystring?name=Jan
// app.get('/', (req, res) => {
//     const name = req.query.name || 'world';
//     res.send(`Hello ${name}`);
// });

app.listen(4700, () => console.log('Start server'));

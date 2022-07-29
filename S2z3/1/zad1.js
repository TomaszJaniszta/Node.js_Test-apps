const express = require('express');
const app = express();

const middleware = (req, res, next) => {
    console.log(req.method + ' ' + req.url + );
    next();
}

app.use(middleware);

app.get('*', (req, res) => {
    res.send('Working!');
});

app.listen(4700, () => console.log('server started'));

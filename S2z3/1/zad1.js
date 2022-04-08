const express = require('express');
const app = express();

const middleware = (req, res, next) => {



    console.log(req.method + ' ' + req.url + )
    
}

app.use(middleware);

app.listen(4700);

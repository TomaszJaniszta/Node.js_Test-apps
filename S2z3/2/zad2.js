const express = require('express');
const app = express();

const middleware = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if(authorizationHeader === 'alamakota'){
        next();

    }else{
        res.status(401);
        res.send('bad token');
    }
    // res.status(777);
    // res.headers.xcustomheader = '1';
    // next(); // to mooze powodowac problemy, jak blad ze drugi raz ustawiasz naglowki to znaczy ze 2 raz probujesz wyslac odpowiedz
}

app.use(middleware);

app.all('*',(req,res,next) => {
    res.send('hello worlds');

});

app.listen(4700, () => console.log('server started'));

`http://localhost:4700/users` zwracała komunikat `Hello from Users path` a dla żądań pod adresem `http://localhost:4700/comments` zwracała komunikat `Hello from Comments path`
const http = require('http');

const app = http.createServer((req, res) => {
    if((req.url === "/comments")){
        res.writeHead(201, {"Content-type":"application/xml"});
        res.write("Hello world from Comments path");
    }
    else if (req.url === "/users") {
        res.writeHead(200, {"Content-type":"application/xml"});
        res.write("Hello world from Users path");
    }

    res.end( );
});

app.listen(4700);


const http = require('http');

const app = http.createServer((req, res) => {
    // const url = new URL('http://localhost:4700?a=5&b=2');
    const url = new URL(`http://${req.headers.host}${req.url}`);
    const a = url.searchParams.get("a");
    const b = url.searchParams.get("b");

    const result = a * b

    res.writeHead(200, {"Content-type":"text/plain"});
    res.write(`Result ${result}`);
    
    res.end( );
});

app.listen(4700);

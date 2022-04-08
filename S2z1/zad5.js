const http = require('http');

const app = http.createServer((req, res) => {
      // const url = new URL('http://localhost:4700/abc?q=some-string');
      const url = new URL(`http://${req.headers.host}${req.url}`);
      const name = url.searchParams.get('name') || `World`;

      res.writeHead(200, {"Content-type":"text/plain"});
      res.write(`Hello ${name}`);

      res.end( );
});

app.listen(4700);

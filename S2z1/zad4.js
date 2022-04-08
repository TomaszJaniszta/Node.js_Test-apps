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


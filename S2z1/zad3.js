// https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Bialystok
const  http  =  require("http");

const app = http.createServer((req, res) => {
      if(req.method === "GET") {
            res.writeHead(200, {"Content-type":"text/plain"}); //kod odpowiedzi 201, http status code
            // res.writeHead(201, {"Content-type":"application/xml"}); //kod odpowiedzi 201, http status code
            res.write("Hello world from server, GET method");
 }  else  if  (req.method  ===  "POST")  {
            res.writeHead(201, {"Content-type":"text/plain"}); 
            res.write("Hello world from server, POST method");
 }  else  if  (req.method  ===  "HEAD")  {
  res.writeHead(202,  {  "Content-type":  "text/plain"  });
  res.write("Hellow  world  from  HEAD");  //head  nie  ma  body  wiec  nie  ma  informacji
 }

 res.end();
});

app.listen(4700);

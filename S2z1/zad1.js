const  http  =  require("http");
// tworzymy nową instancję naszego serwera
const  app  =  http.createServer((req,  res)  =>  {
    // zamykamy połączenie wysyłając tekst
    res.end("Hello  world");
});
// uruchamiamy nasz serwer na porcie 4700
app.listen(4700);

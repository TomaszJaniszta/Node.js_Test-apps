// https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&q=Bialystok
const http = require("http");
// tworzymy nową instancję naszego serwera
const app = http.createServer((req, res) => {
    // zamykamy połączenie wysyłając tekst
  res.end("Hello world");
});
// uruchamiamy nasz serwer na porcie 4700
app.listen(4700);

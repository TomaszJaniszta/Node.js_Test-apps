// Wykorzystując zewnętrzny middleware body-parser (https://www.npmjs.com/package/body-parser , funkcja bodyParser.text() ),
// odczytajmy zawartość żądania POST z body typu text i sprawdźmy, czy w przesłanym przez użytkownika tekście nie
// zostały umieszczone niedozwolone słowa. Jeżeli jakieś słowo ze słownika znajduje się w żądaniu, wyślijmy błąd
// do użytkownika końcowego (status błędu 400). Jeżeli przesłany tekst jest 'bezpieczny' to zapiszmy go w pliku data.txt.
// Przykładowy słownik zakazanych słów: ['piwo', 'hazard', 'cukierki'].
// Stwórzmy tutaj dodatkowo endpointy do wyświetlania zawartości pliku z tekstem przesłanym przez użytkowników
// wyświetlania listy zakazanych słów

const express = require('express');
const app = express;
const bodyParser = require('body-parser')

const forbiddenWords = ['piwo', 'hazard', 'cukierki'];
const middleware = (req, res, next) => {
    const hasForbiddenWords = forbiddenWords.some(word => req.body.includes(word));

    if (hasForbiddenWords) {
        res.status(400).send("Fail")
    }else{
        next();
    }
}

app.use(bodyParser.text()); // wazna kolejnosc
app.use(middleware); // wazna kolejnosc

// bodyParser.text()

app.post('*',(req,res) => {
    console.log(req.body);
    res.send('hello worlds');
    // next();
});

app.listen(4700, () => console.log('server started'));
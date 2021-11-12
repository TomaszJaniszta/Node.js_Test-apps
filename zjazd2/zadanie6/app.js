const yargs = require('yargs')
const args = yargs.argv;
console.log(args);

// Przykładowy sposób uruchomienia:
// ```
// > node app.js --a=5 --b=7 --operator=*
// ```

// Konsola powinna zwrócić wynik operacji:

// ```
// wynik: 35
// ```
// node .\app.js --aa=10 --b=15 --operator=+

// Obsługa parametrów wejściowych. Aplikacja złożona jest z 1 pliku: `app.js`.										
// Command line arguments. The arguments are stored in process.argv - is an array containing the command line arguments. 				
// Podczas uruchamiania aplikacji możemy przekazać jej dodatkowy parametr, który zostanie wyświetlony po komunikacie `hello`. 				
// Gdy podanych będzie więcej parametrów, wtedy ignorujemy wszystkie prócz pierwszego. 			
// Gdy nie będzie podanych żadnych parametrów aplikacja wyświetla `hello world`. 	
								
const { argv } = require('process')

 if (argv.length >=3) {
 console.log("Hello " + argv[2])
 } else {
 console.log("Hello World")
 }



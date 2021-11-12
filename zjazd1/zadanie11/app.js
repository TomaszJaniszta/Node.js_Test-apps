// 11. Rozszerzmy aplikację z zadania 10 tak, by jej uruchomienie z niewłaściwą liczbą parametrów skutkowało wyświetleniem stosownego komunikatu w konsoli.

const { argv } = require('process'); 
const fs = require('fs');
const math = require('./math');

//console.log(argv);

if (argv.length > 4) {

console.log('zbyt dużo parametrów!')

} else if (argv.length < 4) {
console.log('zbyt mało parametrów!')

} else {

var a = fs.readFileSync('a.txt', 'utf8', a)
var b = fs.readFileSync('b.txt', 'utf8', b)
// console.log(a);
// console.log(b);
console.log('Dodawanie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.add(a, b));
console.log('Odejmowanie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.sub(a, b));
console.log('Mnożenie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.mul(a, b));
console.log('Dzielenie  liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.div(a, b));
}
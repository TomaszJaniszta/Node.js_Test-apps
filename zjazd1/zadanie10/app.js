// 10. Rozszerzmy aplikację z zadania 8 tak, by nazwy plików z których pobieramy liczby były
// podawane w parametrach w czasie uruchamiania.

const argv = require('process'); 
const fs = require('fs');
const math = require('./math');

var a = fs.readFileSync('a.txt', 'utf8', a)
var b = fs.readFileSync('b.txt', 'utf8', b)


// console.log(a);
// console.log(b);

console.log('Dodawanie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.add(a, b));
console.log('Odejmowanie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.sub(a, b));
console.log('Mnożenie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.mul(a, b));
console.log('Dzielenie  liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.div(a, b));

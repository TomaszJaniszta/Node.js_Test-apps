const fs = require('fs')
var a = fs.readFileSync('a.txt', 'utf8', a)
var b = fs.readFileSync('b.txt', 'utf8', b)
console.log('a = ' + a)
console.log('b = ' + b)

const math = require('./math') // wczytujemy moduł, działania kalkulacyjne
// console.log(
//   'Dodawanie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.add(a, b),
// )
// console.log(
//   'Odejmowanie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.sub(a, b),
// )
// console.log(
//   'Mnożenie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.mul(a, b),
// )
// console.log(
//   'Dzielenie  liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.div(a, b),
// )

fs.writeFileSync(
  'wynik.txt',
  'Dodawanie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.add(a, b) + '\n',
) // zapis pliku
fs.appendFileSync(
  'wynik.txt',
  'Odejmowanie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.sub(a, b) + '\n',
) // dodanie danych do pliku, dla czytelności zapisanych wartości możemy dodać znak nowej linii (\n)
fs.appendFileSync(
  'wynik.txt',
  'Mnożenie liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.mul(a, b) + '\n',
)
fs.appendFileSync(
  'wynik.txt',
  'Dzielenie  liczb ' + a + ' i ' + b + ' daje w wyniku ' + math.div(a, b) + '\n',
)

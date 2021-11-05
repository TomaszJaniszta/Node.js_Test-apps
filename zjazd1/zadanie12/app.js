const { argv } = require('process'); 
const fs = require('fs')

//   console.log(fs)
//   console.log(argv)
//   console.log(argv[2])

if (argv.length < 3) {
console.log('zbyt mało parametrów!')
} else if (argv.length > 3) {
console.log('zbyt dużo parametrów!')
} else {
var data = fs.readdirSync(argv[2])
console.log('Elementy w: ' + argv[2])
data.forEach((item, index) => {
console.log(`${index} : ${item}`)
});
}

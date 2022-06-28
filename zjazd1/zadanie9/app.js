const { argv } = require('process')
// let first_value = process.argv[2];

//let param = (!first_value) ? 'world' : first_value;
// if (!fisrt_value) {
//     param = 'world';
// }else{
//     param = fisrt_value
// }


if (argv.length >=3) {
console.log("Hello " + argv[2])
} else {
console.log("Hello World")
}

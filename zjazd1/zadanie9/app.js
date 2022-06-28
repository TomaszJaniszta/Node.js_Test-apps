// Support for input parameters. The application consists of 1 file: `app.js`.
// Command line arguments. The arguments are stored in process.argv - is an array containing the command line arguments.
// When starting the application, we can pass an additional parameter to it, which will be displayed after the message`hello`.
// When more parameters are given, then we ignore all but the first one.
// When no parameters are specified, the application displays `hello world`.

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

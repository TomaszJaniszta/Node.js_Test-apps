const testText = process.argv[2];
const colors = require('colors');

try {
console.log(testText.rainbow);
} catch (error) {
console.log("Please add a text in calling! Example of calling: node app.js zadanie_zaliczeniowe2 . Error: ", error.message); 
}

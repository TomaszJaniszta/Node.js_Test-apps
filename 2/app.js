const fs = require('fs');

const dateOfCreation = fs.statSync(__filename).birthtime;
const modyficationTime = fs.statSync(__filename).mtime;
const fileSize = fs.statSync(__filename).size;

console.log('Date of file  creation: ' + dateOfCreation);
console.log('Date of last modyfication: ' + modyficationTime);
console.log('File size is in bytes = ' + fileSize);

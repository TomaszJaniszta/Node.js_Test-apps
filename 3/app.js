const fs = require('fs');
const axios = require('axios');

try{
    var dataFile = JSON.parse( fs.readFileSync('./data.json', 'utf8') );
    } catch (error) {
        console.log("No data.json file?. Error: ", error.message); 
        return;
        };

var numberData = dataFile.number;
var filenameData = dataFile.filename;
var url = `http://numbersapi.com/${numberData}`;

    console.log(`Number is: ${numberData}`); 
    console.log(`Name of saved file will be: ${filenameData}`); 
    console.log(`URL for gettinng description: ${url}`); 

function saveFile(filenameData, numberInfo){ try {
            fs.writeFileSync(filenameData, numberInfo);
            } catch (error) {
            console.log("Error. file.json not saved? Error: ", error.message); 
                };
            };

axios.get(url, saveFile)
    .then(function (response) {
    var numberInfo = response.data;
    console.log(numberInfo);
    saveFile(filenameData, numberInfo);
        })
    .catch(function (error) {
    console.log("Something went wrong. Error: ", error.message); 
});

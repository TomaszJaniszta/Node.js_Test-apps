# Node.js_Tests_apps_1

## Small test aplications for different purposes: text coloring, displaying file details, downloading data from the file and API, saving in the file, 


**1** - The application takes a string in the startup parameters and then displays it in rainbow colors.

**2** - The program prints out the details of the file with its own source code.

**3** - The application reads the number and file name from the data.json file. Then:

  - retrieves information about a given number from the API (http://numbersapi.com/{number})
  - saves information downloaded from the API in a file with a previously downloaded name

Requests to the API and write to a file are made asynchronously

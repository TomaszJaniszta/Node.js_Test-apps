## S2z3 - Use Postman. Using: middleware, external middleware body-parser, fs.existsSync, express.static, axios

**Node.js/S2z3/1** - Middleware. The task of middleware is to listen for all requests to the server and display in the console information on which address the user is trying to get to, what method and what parameters are given in the query string.

**Node.js/S2z3/2** - Middleware, which protects the application against access by unauthorized persons. The user send a token in the header, who authorizes it. The name of the header is authorization. Authorization header consists of a user and a password (pattern: login:password) and checking whether there is such a user with such a password in the system. The list of users is an array. Returns the name of the logged in user, e.g. Hello Adam. The name is from the list of users.

**Node.js/S2z3/3** - Used external middleware body-parser (https://www.npmjs.com/package/body-parser , function bodyParser.text() ). Read the contents of the POST request from the body type text and check that there are no prohibited words in the text submitted by the user. If a word from the dictionary is in the request, sends an error to the end user (400 error status). If the submitted text is 'safe', it saves it in a data.txt file. Additional endpoints created for: displaying the contents of the file with text sent by users, displaying a list of prohibited words.

**Node.js/S2z3/4** - An application that returns user data from the address https://jsonplaceholder.typicode.com/users/{userId}. In the absence of a user, or problems in communication with the server, it throws an exception, which is handled in middleware. Middleware should write to a file the time the exception occurred. Returns a response with the corresponding message.

**Node.js/S2z3/6** - Middleware, which checks whether the specified path is the path to a physical file on the disk (fs module). If so, the file sends to the customer. If not, it forwards the execution of our request and returns the corresponding message. (Files only in the folder with the application code)

**Node.js/S2z3/7** - Using middleware Express express.static to get the action like an application 6.

**Node.js/S2z3/8** - Modification 7 by middleware Express express.static returned files only from the images folder, a folder in the main application folder.

**Node.js/S2z3/9** - Middleware that logs in the console the time of receiving the request and the time of sending the response. In addition, it saves data to the file - new entries are added to the end of the file.

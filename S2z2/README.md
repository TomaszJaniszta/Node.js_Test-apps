## S2z2 - Use Postman with most aplications. Codes using: Regex, Express, express.Router, res.format. Methods: GET, DELETE, POST.

**Node.js/S2z2/1.js** - An application that checks in the sample text the correctness of the postal code and the correctness of the phone number. Also writing out a group of 3 digits and replacing double spaces with single spaces. Regex used.

**Node.js/S2z2/2** - Application for use with Postman. When the 'name' parameter appears in the address, it greets our user after the name. (http://localhost:4700/?name=Jan). The second version using the 'Express' framework and an additional parameter retrieved from the URL instead of the query string (http://localhost:4700/Anna).

**Node.js/S2z2/3** - The application takes 2 parameters 'a' and 'b' from the url (http://localhost:4700/2/3) and performs multiplication (Express used). The result is sent to the end user (client). 

**Node.js/S2z2/4** - Extension of the application 3 with additional mathematical activities such as multiplication, division and subtraction. Divide into appropriate paths.

**Node.js/S2z2/5** - An application operating on a board with users. The path '/add' for adding a user that takes the parameters '?name=Jan&username=janko&email=jan@nowak.abc'. The display path of all users, and if the appropriate 'id' is given, the display of one user, similarly the deletion of one user through the appropriate path.

**Node.js/S2z2/6** - An application that operates on a board containing posts. To add a post, it supports the POST method and data sent in the body request. Application Extension 5.

**Node.js/S2z2/7** - Application 6 split with the use of 'express. Router'.

**Node.js/S2z2/8** - Application 7 returning single user data returns a different data format depending on the Accept request header (sample headers: text/plain, text/html, application/json). The res.format() function used.

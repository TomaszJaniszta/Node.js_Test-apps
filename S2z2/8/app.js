const express = require('express');
const app = express();
const router = express.Router();

// wyłączenie zwracania nagłówka x-powered-by
app.disable("x-powered-by");
// potrzebne do parsowania ciała żądania w formacie JSON
app.use(express.json()); 

let users = [{
    id: 1,
    name: 'Adam',
    username: 'adamek',
    email: 'adam@adamek.abc'
},
  {
    id: 2,
    name: 'Adam2',
    username: 'adamek2',
    email: 'adam2@adamek.abc',
}];

let posts = [{
    id: 1,
    title: 'Ala ma kota',
    body: 'a kot ma Ale',
}];
router.get('/users', (req, res) => {
    res.json(users);
});

router.post("/add", (req, res) => {
    if (!req.query.name || !req.query.username || !req.query.email) {
        res.status(400).send('Missing parameters');
    }

    var userIds = users.map(u => u.id);
    var maxUserId = Math.max(...userIds);
    var newUserId = maxUserId + 1;
    
    const newUser = {
        id: newUserId,
        name: req.query.name,
        username: req.query.username,
        email: req.query.email,
    }

    users.push(newUser);
    res.statusCode = 201;
    res.send(users);
});

router.get('/users/:id', (req, res) => {
    const user = users.filter((u) => u.id == req.params.id );
        
    if (user.length == 0) {
        res.status(404).send('User not found');
    };
    console.log(user);

  res.format({
    'text/plain': function () {
      res.send(
        `Text. id: ${user[0].id}, name: ${user[0].name}, username: ${user[0].username}, email: ${user[0].email},`
      )},
    html: function () {
      res.send(
        `HTML format. Id: ${user[0].id}, name: ${user[0].name}, username: ${user[0].username}, email: ${user[0].email}`
      )},
    json: function () {
      res.json(user);
    },
  });
});

app.use(router);
app.listen(4700, () => console.log('Start server'));
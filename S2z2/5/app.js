const express = require('express');
const app = express();

let users = [{
    id: 1,
    name: 'Adam',
    username: 'adamek',
    email: 'adam@adamek.abc',
}];

// http://localhost:4700/add?name=Jan&username=janko&email=jan@nowak.abc
app.post('/add', (req, res) => {
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

    users.push(newUser)
    res.statusCode = 201;
    res.send(users);
});

// http://localhost:4700/users
app.get('/users', (req, res) => {
    // zwracając wartość za pomocą res.json() express sam przetworzy obiekt na JSON i ustawi odpowiedni content-type
    res.json(users);
});

// http://localhost:4700/users/1
app.get('/users/:id', (req, res) => {
    const user = users.filter(
        (u) => u.id == req.params.id
    );

    if (user.length == 0) {
        res.status(404).send('User not found');
    }

    // zwracając wartość za pomocą res.json() express sam przetworzy obiekt na JSON i ustawi odpowiedni content-type
    res.json(user[0]);
});

// http://localhost:4700/delete/0
app.delete('/delete/:id', (req, res) => {
    const userExists = users.find(
        (u) => u.id == req.params.id
    );

    if (!userExists) {
        res.statusCode = 404;
        res.send("Not found");
    } else {
        users = users.filter(
            (u) => u.id != req.params.id
        );
        res.statusCode = 204;
        res.send();
    }
});

app.listen(4700, () => console.log('Start server'));

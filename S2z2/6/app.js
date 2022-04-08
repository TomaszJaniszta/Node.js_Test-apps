const express = require('express');
const app = express();

let users = [{
    id: 1,
    name: 'Adam',
    username: 'adamek',
    email: 'adam@adamek.abc',
}];

let posts = [{
    id: 1,
    title: 'Ala ma kota',
    body: 'a kot ma Ale',
}];

// potrzebne do parsowania ciała żądania w formacie JSON
app.use(express.json()); 
// http://localhost:4700/users/add?name=Jan&username=janko&email=jan@nowak.abc
app.post('/users/add', (req, res) => {
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

// http://localhost:4700/users/delete/0
app.delete('/users/delete/:id', (req, res) => {
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

// http://localhost:4700/posts/add/
app.post('/posts/add', (req, res) => {
    // pobranie obiektu z ciała żądania
    const datafromBody = req.body;
    if (!datafromBody.title || !datafromBody.body) {
        res.status(400).send('Missing parameters');
    }

    var postIds = posts.map(u => u.id);
    var maxPostId = Math.max(...postIds);
    var newPostId = maxPostId + 1;
    
    const newPost = {
        id: newPostId,
        title: datafromBody.title,
        body: datafromBody.body
    }

    posts.push(newPost)
    res.statusCode = 201;
    res.send(posts);
});

// http://localhost:4700/posts/
app.get('/posts', (req, res) => {
    // zwracając wartość za pomocą res.json() express sam przetworzy obiekt na JSON i ustawi odpowiedni content-type
    res.json(posts);
});

// http://localhost:4700/posts/0
app.get('/posts/:id', (req, res) => {
    const post = posts.filter(
        (u) => u.id == req.params.id
    );

    if (post.length == 0) {
        res.status(404).send('Post not found');
    }

    // zwracając wartość za pomocą res.json() express sam przetworzy obiekt na JSON i ustawi odpowiedni content-type
    res.json(post[0]);
});

// http://localhost:4700/posts/delete/0
app.delete('/posts/delete/:id', (req, res) => {
    const postExists = posts.find(
        (u) => u.id == req.params.id
    );

    if (!postExists) {
        res.statusCode = 404;
        res.send("Not found");
    } else {
        posts = posts.filter(
            (u) => u.id != req.params.id
        );
        res.statusCode = 204;
        res.send();
    }
});

app.listen(4700, () => console.log('Start server'));

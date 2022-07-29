app.js
const express = require('express');
const app = express();

app.use("/images", express.static('images'));

// http://localhost:4700/music.txt
// http://localhost:4700/comment.txt
app.get('/:parameter', (req, res) => {
    res.send(`this was resuest for ${req.params.parameter} parameter`);
});

app.listen(4700, () => console.log('start server'));

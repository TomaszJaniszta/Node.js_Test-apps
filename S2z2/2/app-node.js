const http = require('http');

// pobieranie z query stringa
// http://localhost:4700
// http://localhost:4700/?name=Jan
const app = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.host}`);

    const name = parsedUrl.searchParams.get('name') || 'world';

    res.end(`Hello ${name}`);
});

app.listen(4700);

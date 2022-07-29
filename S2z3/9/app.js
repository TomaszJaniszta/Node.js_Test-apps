const express = require("express");
const app = express();
const fs = require("fs");

const saveData = (data) => {
    fs.appendFile(`time.txt`, data, (err) => {
        if (err) {
            throw err;
        }
    });
};
  
const requestTime = (req, res, next) => {
    let requestTime = Date.now();
    saveData("Request time " + requestTime + "\n");
    next();
};

const responseTime = (req, res, next) => {
    res.send(res.data);
    let responseTime = Date.now();
    saveData("Response time " + responseTime + "\n");
};

app.use(requestTime);

app.get("/", (req, res, next) => {
    res.data = "Hello World";
    next();
});

app.use(responseTime);

app.listen(4700, () => console.log("start server"));

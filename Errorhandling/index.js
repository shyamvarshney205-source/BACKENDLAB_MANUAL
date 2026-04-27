const express = require('express');
const app = express();
const errorhandler = require('./errorhandler');
app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
});
app.use((req, res, next) => {
    const error = new Error("Wrong!");
    error.statusCode = 404;
    next(error);
});
app.use(errorhandler);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
const express = require('express');
const app = express();
const urlRoute = require('./routes/urlroute');
app.use(express.json());
app.use('/', urlRoute);   
module.exports = app;
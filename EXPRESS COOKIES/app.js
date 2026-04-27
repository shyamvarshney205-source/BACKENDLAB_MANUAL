const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/setcookie', (req, res) => {
    res.cookie('uname', 'sec-fc', {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false
    });
    res.send('Cookie setup successfully!');
});
app.get('/getcookie', (req, res) => {
    const cookieValue = req.cookies['uname'];
    if (cookieValue) {
        res.send(`Cookie value: ${cookieValue}`);
    } else {
        res.send('Cookie not found');
    }
});
app.get('/deletecookie', (req, res) => {
    res.clearCookie('uname');
    res.send('Cookie deleted successfully!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000, http://localhost:3000');
});

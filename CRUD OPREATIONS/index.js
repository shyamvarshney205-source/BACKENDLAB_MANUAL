const express = require('express');
const app = express();
const users = require('./Users.json');

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET all users (API)
app.get('/api/userdata', (req, res) => {
    return res.json(users);
});

// GET users in HTML format
app.get('/user', (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.name}</li>`).join('')}
    </ul>
    `;
    res.send(html);
});

// GET user by ID
app.get('/userdata/:id', (req, res) => {
    const id = Number(req.params.id);   // convert to number
    const userwise = users.find(user => user.idNo === id);

    if (!userwise) {
        return res.status(404).json({ message: "User not found" });
    }

    return res.json(userwise);
});

// POST new user
app.post('/userData', (req, res) => {
    const data = req.body;

    console.log(data);

    // add new user (temporary, not saved in file)
    users.push(data);

    return res.json({ message: "User added successfully", data });
});

// server
app.listen(3000, () => {
    console.log("Server is listening at http://localhost:3000");
});
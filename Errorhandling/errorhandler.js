const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/users', (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return next(new AppError("Name is required", 400));
    }

    const newUser = {
        id: users.length + 1,
        name
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return next(new AppError("User not found", 404));
    }

    user.name = req.body.name || user.name;
    res.json(user);
});

app.delete('/api/users/:id', (req, res, next) => {
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return next(new AppError("User not found", 404));
    }

    users.splice(index, 1);
    res.json({ message: "User deleted" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
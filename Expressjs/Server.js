const express = require('express');
const app = express();
app.use(express.json());

app.post("/data", (req, res) => {
   console.log(req.body);
   res.send("Data Received Successfully");
});

app.listen(3000, () => {
   console.log("Server running on port 3000");
});
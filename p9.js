const http = require("http");

// Server on port 3000
const server1 = http.createServer((req, res) => {
    res.end("First server on port 3000");
});
server1.listen(3000);

// Server on port 3001
const server2 = http.createServer((req, res) => {
    res.end("Second server on port 3001");
});
server2.listen(3001);

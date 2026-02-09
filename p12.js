const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // Read index.html file
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// Listen on port 5000
server.listen(5000, () => {
    console.log('Server running at http://localhost:5000/');
});

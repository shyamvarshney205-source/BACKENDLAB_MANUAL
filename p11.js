const http = require("http");
const server = http.createServer((req, res) => {
    if (req.url === "/home") {
        res.end("This is Home");
    } else if (req.url === "/login") {
        res.end("This is Login");
    } else if (req.url === "/profile") {
        res.end("Profile Page");
    } else {
        res.end("Page Not Found");
    }
});
server.listen(3000);

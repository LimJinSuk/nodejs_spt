const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile("./resources/nodejs-interactive.png", (error, data) => {
        if (error) {
            res.writeHead(404, {"Content-Type": "text/html;charset=utf8"});
            res.end("<h1>404 Not Found</h1>");
        } else {
            res.writeHead(200, {"Content-Type": "image/png"});
            res.end(data);
        }
    });
}).listen(3000, () => {
    console.log("Server is running on localhost:3000");
})
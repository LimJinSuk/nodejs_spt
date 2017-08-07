const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((request, response) => {
    if (request.method == 'GET') {
        fs.readFile("./html/005_page.html", (error, data) => {
            response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
            response.end(data);
        });
    } else if (request.method == "POST") {
        request.on("data", (data) => {
            response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
            response.end("<h1>" + data + "</h1>");
        });
    } else {
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
        response.end("<h1>Cannot Response on Request");
    }
}).listen(3000, () => {
    console.log("Server is listening on localhost:3000");
});
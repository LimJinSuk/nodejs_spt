const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    response.end("<h1>Hello from Node.js</h1>");
}).listen(3000, () => {
    console.log("Server is listening on localhost:3000");
});
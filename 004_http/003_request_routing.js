const http = require('http');
const url = require('url');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});

    var path = url.parse(request.url, true);
    console.log(path);

    if (path.pathname == '/hello') {
        var name = path.query.name || "World";
        response.end(`<h1>Hello, ${name}</h1>`);
    } else {
        response.end('<h1>Response from Node.js/h1>');
    }
}).listen(3000, function() {
    console.log("Server is listening on localhost:3000");
});

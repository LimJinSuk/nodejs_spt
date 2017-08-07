const http = require('http');
const url = require('url');

http.createServer((request, response) => {
    if (request.method == 'GET') {
        const query = url.parse(request.url, true).query;
        response.write("query : ");
        response.end(JSON.stringify(query));
    } else {
        response.end("Cannot Response on POST Request");
    }
}).listen(3000, () => {
    console.log("Server is listening on localhost:3000");
});
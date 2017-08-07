var http = require('http');
var socket = require('socket.io');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    fs.readFile('page.html', function(error, data) {
        response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
        response.end(data);
    });
}).listen(3000, function() {
    console.log("Server is running on localhost:3000");
});

var io = socket.listen(server);
io.sockets.on('connection', function(socket) {
    console.log(socket.id, "connected");
    socket.on("channel", function(data) {
        io.sockets.emit("channel", data);
    });
    socket.once("disconnect", function() {
        console.log(socket.id, "disconnected");
        io.sockets.emit("channel", socket.id + "님이 퇴장하였습니다.");
    });
    io.sockets.emit("channel", socket.id + "님이 입장하였습니다.");
});


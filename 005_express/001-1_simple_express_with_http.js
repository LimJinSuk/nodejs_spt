const express = require('express');
const http = require('http');

const app = express();

http.createServer(app).listen(3000, () => {
    console.log("Express is running on localhost:3000");
});

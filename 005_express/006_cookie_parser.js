const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const static = require('serve-static');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/public', static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.redirect('/public/006_cookies.html');
});

app.get('/cookies', (request, response) => {
    console.log("Cookies:", request.cookies);

    response.writeHead(200, {"Content-Type": "text/html;charset=utf8"});
    response.write("<h1>Cookies</h1>");
    
    response.write("<ul>");
    for (let key in request.cookies) {
        response.write(`<li>${key} = ${request.cookies[key]}`);
    }
    response.write("</ul>");
    response.end();
});

app.post('/cookies/set', (request, response) => {
    for (key in request.body) {
        response.cookie(key, request.body[key]);
    }
    response.redirect('/cookies');
});

app.listen(app.get('port'), () => {
    console.log(`Express is running on localhost:${app.get('port')}`);
});
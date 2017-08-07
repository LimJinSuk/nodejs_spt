const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const static = require('serve-static');
const app = express();

app.set('port', process.env.PORT || 3000);

//  body-parser를 사용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/public', static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
    response.redirect('/public/005_post_form.html');
});

app.post('/parse', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    res.write("<h1>POST PARAMS</h1>");

    console.log(req.body);

    res.write("<ul>");
    for (key in req.body) {
        res.write(`<li>${key} = ${req.body[key]}</li>`);
    }
    res.end("</ul>");
});

app.listen(app.get('port'), () => {
    console.log(`Express is running on localhost:${app.get('port')}`);
});
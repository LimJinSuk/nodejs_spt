const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const static = require('serve-static');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'mysessionkey',
    resave: false,
    saveUninitialized: true
}));

app.use('/public', static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    if (req.session.user) {
        let user = req.session.user;

        res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});

        res.write("<h1>User Session</h1>");
        res.write("<ul>");
        res.write(`<li>User Id: ${user.id}</li>`);
        res.write(`<li>User Name: ${user.name}</li>`);
        res.write("</ul>");

        res.end("<a href='/user/logout'>Logout</a>");
    } else {
        res.redirect('/public/007_login.html');
    }
});

app.post('/users/login', (req, res) => {
    if (req.session.user) {
        res.redirect('/');
    } else {
        req.session.user = {
            id: req.body.userId,
            name: req.body.userName
        }
        res.redirect('/');
    }
});

app.get('/users/logout', (req, res) => {
    if (req.session.user) {
        req.session.destroy((err) => {
            if (err) { throw err;}

            res.redirect('/');
        });
    } else {
        res.redirect('/');
    }
});

app.listen(app.get('port'), () => {
    console.log(`Express is running on localhost:${app.get('port')}`);
});
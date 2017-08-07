//  hello와 users 요청을 처리하는 라우트를 모듈로 분리하는 예제

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const static = require('serve-static');

const root_router = require('./routers/root_router');
const hello_router = require('./routers/hello_router');
const user_router = require('./routers/user_router');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(session({
    secret: 'mysessionkey',
    resave: false,
    saveUninitialized: true
}));

app.use('/public', static(path.join(__dirname, 'public')));

app.use('/', root_router);
app.use('/hello', hello_router);
app.use('/users', user_router);
app.listen(app.get('port'), () => {
    console.log(`Express is running on localhost:${app.get('port')}`);
});
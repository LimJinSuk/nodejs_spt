const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const static = require('serve-static');
const mysql = require('mysql');

const root_router = require('./routers/root_router');
const products_router = require('./routers/products_router');

const app = express();

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '1.234.80.15',
    user: 'nodesample',
    password: 'nodesample',
    database: 'node_sample',
    debug: false
});

app.set('port', process.env.PORT || 3000);
app.set('pool', pool);  //  Check -> products_router.js: Deliver Connection Pool

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/public', static(path.join(__dirname, 'public')));
app.use('/', root_router);
app.use('/products', products_router);

app.listen(app.get('port'), () => {
    console.log(`Express is running on localhost:${app.get('port')}`);
});
//  Need: MySQL Module
//  npm install mysql --save

const mysql = require('mysql');

//  Settings
/*
const pool = mysql.createPool({
    connectionLimit: 10,
    host: '{mysql_server_host_name}',
    user: '{mysql_user_name}',
    password: '{mysql_user_password}',
    database: '{database_name}',
    debug: true|false
});
*/

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '{mysql_server_host_name}',
    user: '{mysql_user_name}',
    password: '{mysql_user_password}',
    database: '{database_name}',
    debug: true|false
});



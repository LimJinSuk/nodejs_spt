const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    if (req.session.user) {
        let user = req.session.user;

        res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});

        res.write("<h1>User Session</h1>");
        res.write("<ul>");
        res.write(`<li>User Id: ${user.id}</li>`);
        res.write(`<li>User Name: ${user.name}</li>`);
        res.write("</ul>");

        res.end("<a href='/users/logout'>Logout</a>");
    } else {
        res.redirect('/public/007_login.html');
    }
});

module.exports = router;
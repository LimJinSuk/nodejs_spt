const express = require('express');
const router = express.Router();

router.route('/login').post((req, res) => {
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

router.route('/logout').get((req, res) => {
    if (req.session.user) {
        req.session.destroy((err) => {
            if (err) { throw err;}
            res.redirect('/');
        });
    } else {
        res.redirect('/');
    }
});

module.exports = router;
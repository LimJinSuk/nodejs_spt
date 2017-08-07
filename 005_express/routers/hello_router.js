const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.send('<h1>Hello World</h1>');
});

router.route('/:name').get((req, res) => {
    let name = req.params.name;
    res.send(`<h1>Hello, ${name}`);
});
module.exports = router;
const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res.redirect('/products');
});

module.exports = router;
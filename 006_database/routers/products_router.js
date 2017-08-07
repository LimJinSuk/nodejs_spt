const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const router = express.Router();

router.route('/').get((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    let pool = req.app.get('pool'); //  Check: Delivered Connection Pool from Express
    pool.getConnection((err, conn) => {
        if (err) {
            if (conn) {
                conn.release();
            }
            return;
        }

        const exec = conn.query("SELECT * FROM products", (err, result) => {
            conn.release();

            if (err) {
                //  TODO: Error Handling
                return;
            } else {
                // console.log(result);
                res.write("<h1>Products</h1>");

                if (result.length > 0) {
                    res.write("<ul>");
                    
                    for (let i = 0; i < result.length; i++) {
                        res.write(`<li>${result[i].name} : ${result[i].price}`);
                    }
                    res.write("</ul>");
                }

                res.write("<a href='/products/add'>Add Product</a>");
            }
            res.end();
        });
    });
});

router.route('/add').get((req, res) => {
    res.redirect('/public/add_product.html');
}).post((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    let pool = req.app.get('pool');
    console.log(req.app);
    pool.getConnection((err, conn) => {
        if (err) {
            if (conn) {
                conn.release();
            }
            return;
        } 
        console.log(req.body);

        const data = [req.body['productName'], req.body['productPrice']];
        const exec = conn.query("INSERT INTO products (name, price, created_at) values (?, ?, now())", data, (err, result) => {
            conn.release();

            if (err) {
                console.dir(err);
            } else {
                res.redirect('/products');
            }
        });
    });
});

module.exports = router;
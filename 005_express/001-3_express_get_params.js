const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200);
    res.send("<h1>Hello From Express");
});

app.get('/sayhello/:name', (req, res) => {
    res.status(200);
    let name = req.params.name;

    res.send(`<h1>Hello, ${name}`);
});

app.listen(3000, () => {
    console.log("Express is running on localhost:3000");
});
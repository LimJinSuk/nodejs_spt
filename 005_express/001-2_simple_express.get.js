const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200);
    res.send("<h1>Hello From Express");
});

app.get('/json', (req, res) => {
    res.status(200);
    res.json({
        code: 200,
        message: "Hello JSON from Express"
    })
});

app.listen(3000, () => {
    console.log("Express is running on localhost:3000");
});
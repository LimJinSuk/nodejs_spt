const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.use((request, response, next) => {
    console.log('First Middleware');
    request.middlewares = [];
    request.middlewares.push("First Middleware");
    next();
});

app.use((request, response, next) => {
    console.log('Second Middleware');
    request.middlewares.push("Second Middleware");
    next();
});

app.get('/', (request, response) => {
    console.log("Processing GET Request");
    response.send(request.middlewares);
});

app.listen(app.get('port'), () => {
    console.log(`Express is running on localhost:${app.get('port')}`);
});
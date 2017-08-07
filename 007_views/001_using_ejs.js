const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const static = require('serve-static');

const app = express();

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.render('template', {title: "Hello EJS", message: "EJS Test Page"});
});

app.get('/list', (req, res) => {
    const list = ['Dog', 'Cow', 'Cat'];
    res.render('template', {title: "Hello EJS", message: "List", list: list});
})

app.listen(app.get('port'), () => {
    console.log(`Express is running on localhost:${app.get('port')}`);
});
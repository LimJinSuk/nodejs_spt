const express = require('express');
const static = require('serve-static');
const path = require('path');
const app = express();

app.use('/public', static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Express is running on localhost:${app.get('port')}`);
});
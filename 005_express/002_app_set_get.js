const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`Express is running on localhost:${app.get('port')}`);
}); 

//  Unix or Linux
//  PORT=8090 node index.js

var fs = require('fs');

//  Read File Asynchronously
fs.readFile('./supports/lorem-ipsum.txt', 'utf8', function (err, data) {
// fs.readFile('wrongfilename', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log("===========End===========");
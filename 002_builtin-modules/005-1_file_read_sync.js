var fs = require('fs');

//  Read File Synchronously
try {
    var text = fs.readFileSync('./supports/lorem-ipsum.txt', 'utf8');
    // var text = fs.readFileSync('./wrong_filename', 'utf8');
    console.log(text);
} catch (e) {
    console.log(e);
}

console.log("===========End===========");
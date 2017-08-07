var fs = require('fs');

var text = 'Hello Node File System...\n';

fs.writeFile('./supports/async_writed_text.txt', text, 'utf8', function(err) {
    console.log('End Writing');
});

// fs.appendFile('./supports/async_appended_text.txt', text, 'utf8', function(err) {
//     console.log('End Appending');
// });

console.log('End Process');
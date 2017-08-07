var fs = require('fs');

var text = 'Hello Node File System...\n';

fs.writeFileSync('./supports/sync_writed_text.txt', text, 'utf8');
// fs.appendFileSync('./supports/sync_appended_text.txt', text, 'utf8');
console.log('End');
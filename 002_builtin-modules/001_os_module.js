var os = require('os');
//  기본 모듈, 혹은 npm으로 설치된 모듈은 경로 설정을 하지 않는다

console.log('Host Name: ', os.hostname());
console.log('OS Type: ', os.type());
console.log('Platform: ', os.platform());
console.log('Architecture: ', os.arch());
console.log('Release: ', os.release());
console.log('Uptime: ', os.uptime());
console.log('Load Average: ', os.loadavg());    //  Return Array
console.log('Total Memory: ', os.totalmem());
console.log('Free Memory: ', os.freemem());
console.log('CPU Info: ', os.cpus());
console.log('Network Interfaces: ', os.networkInterfaces());    //  Return Array

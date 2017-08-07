var module1 = require('./modules/module1.js');  //  Load module

console.log('module1.add : %d', module1.add(5, 6));
console.log('module1.square : %d', module1.square(5));

var area = require('./modules/area_module');

console.log('area_module.square : %d', area.square(6));
console.log('area_module.circle : %d', area.circle(8));
console.log('area_module.rectanble : %d', area.rectangle(5,6));

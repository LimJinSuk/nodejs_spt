const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter{}
let counter = 0;

const customEvent = new CustomEventEmitter();

customEvent.on("sayhi", function(count) {
    console.log("sayhi EventCalls:", count);
    console.log(this);
});

// customEvent.on("sayhi", (count) => {
//     console.log("sayhi Event Calls:", count);
//     console.log(this);
// });  //  ?

setInterval(() => {
    counter++;
    customEvent.emit("sayhi", counter);
}, 1000);
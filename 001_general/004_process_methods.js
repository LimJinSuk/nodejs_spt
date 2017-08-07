var count = 0;

setInterval(() => {
    console.log("Memory Usage: ", process.memoryUsage());
    console.log("Uptime ", process.uptime());
}, 1000);
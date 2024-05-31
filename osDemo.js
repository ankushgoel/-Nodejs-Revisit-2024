import os from 'os';

// userInfo()
console.log(os.userInfo());

console.log("Uptime:", os.uptime());


console.log("Total memory: " + os.totalmem());
console.log("Free memory: " + os.freemem());

console.log("Type: " + os.type());
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

// cpus()
console.log(os.cpus());
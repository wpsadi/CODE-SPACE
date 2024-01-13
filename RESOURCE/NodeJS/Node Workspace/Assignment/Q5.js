const fs  = require("fs");
const os = require("os");

fs.unlinkSync(__dirname+'/nodejs_architecture.txt');

console.log("file deleted successfully")
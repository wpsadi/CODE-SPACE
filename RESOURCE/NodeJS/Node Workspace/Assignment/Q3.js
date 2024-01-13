const fs  = require("fs");
const os = require("os");

let data = fs.readFileSync(__dirname+'/nodejs_architecture.txt');

data = data.toString();

console.log(data);
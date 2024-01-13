const os = require("os");

const data = {
    'OS Name':os.type(),
    'OS Version':os.release()
}

console.log(data)
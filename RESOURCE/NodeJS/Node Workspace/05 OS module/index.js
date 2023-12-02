const os = require("os")

x = os.freemem()
x = os.totalmem()
x = os.tmpdir()
x = os.arch()
x = os.networkInterfaces()
x = JSON.stringify(x)

x = os.endianness()
x= os.type()
x = os.hostname()
x = os.platform()
x = os.release()
console.log(x)

 
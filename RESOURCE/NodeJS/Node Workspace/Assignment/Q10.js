const event = require("events");

const emit = new event();

emit.addListener("subscribe",(name)=>{
    console.log(`Max default listeners  ${emit.getMaxListeners()}\n`);
    emit.setMaxListeners(5);
    console.log(`Max Updated listenrs ${emit.getMaxListeners()}`);
})






emit.emit("subscribe","Physics Wallah");
const event = require("events");

const emit = new event();

emit.addListener("subscribe",(name)=>{
    console.log(`Welcome to ${name}`)
})

emit.emit("subscribe","Physics Wallah");
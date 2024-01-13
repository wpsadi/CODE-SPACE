const fs  = require("fs");
const os = require("os");

let extra = `\nNode.js is a platform built on Chrome's V8 JavaScript engine. It is designed for building highly scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

Some of the key features of Node.js include:

Event-driven architecture: This means that Node.js applications are not bound by traditional thread-based concurrency models. Instead, they use a system of events and callbacks to handle asynchronous operations. This makes Node.js applications very efficient at handling large numbers of concurrent connections.
Non-blocking I/O: Node.js uses a non-blocking I/O model, which means that Node.js applications do not wait for I/O operations to complete before they can continue processing. This makes Node.js applications very fast and responsive.
JavaScript: Node.js applications are written in JavaScript, which is a popular and widely used programming language. This makes it easy to find and hire developers who can work on Node.js projects.
Node.js is a powerful platform that can be used to build a wide variety of applications, including web servers, chat applications, real-time applications, and APIs.`

fs.appendFileSync(__dirname+'/nodejs_architecture.txt',`${extra}`);
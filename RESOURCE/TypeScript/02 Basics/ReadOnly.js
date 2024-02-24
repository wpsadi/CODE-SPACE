"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(u) {
    return u;
}
var x = createUser({ name: "aditya", "email": "aditya@g.com", "isActive": true, "_id": [1, 2] });
x._id.push(2); // TS allows this even after putting readOnly 
console.log(x._id);
var z = (function (u) {
    return u;
})({ cardNumber: "s", cardDate: "as", cvv: 1 });

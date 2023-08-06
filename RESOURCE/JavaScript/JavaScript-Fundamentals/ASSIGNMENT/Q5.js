//Estimated Delivery Times
let T_standard = "3-5 days";
let T_express = "1-2 days";
let T_overnight = "Tomorrow";

console.log("Select Your Pacakge\n\
[1] Standard\n\
[2] Express\n\
[3] overnight")

let choice = 2;

switch (choice){
    case 1:
        console.log("Since You have chosen Standard so your estimated delivery time will be \""+T_standard+"\".")
        break
    case 2:
        console.log("Since You have chosen Express so your estimated delivery time will be \""+T_express+"\".")
        break
    case 3:
        console.log("Since You have chosen Overnight so your estimated delivery time will be \""+T_overnight+"\".") 
        break
    default :
        console.log("1 Eon")
}
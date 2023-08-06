//Estimated Delivery Times
let T_standard = "3-5 days";
let T_express = " 1-2 days";
let T_overnight = "Tomorrow";

console.log("Select Your Pacakge\n\
[1] Standard\n\
[2] Express\n\
[3] overnight")

let choice = 1;

if (choice == 1){
    console.log("Since You have chosen Standard so your estimated delivery time will be \""+T_standard+"\".")
}

else if (choice == 2){
    console.log("Since You have chosen Express so your estimated delivery time will be \""+T_express+"\".")
}

else{
    console.log("Since You have chosen Overnight so your estimated delivery time will be \""+T_overnight+"\".") 
}
let NoAdults = 1;
let NoSeniors = 1;
let NoChilds = 2;

let PoAdult = 150; //Rs 150/-
let PoSenior = 120; //Rs 120/-
let PoChild = 100; //Rs 100/-

let amt_of_childs = NoChilds * PoChild;
let amt_of_seniors = NoSeniors * PoSenior;
let amt_of_adults = NoAdults * PoAdult;

let total_cost = amt_of_childs + amt_of_seniors + amt_of_adults;

console.log("Total Price is Rs "+total_cost)
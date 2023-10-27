function fc(n){
   return n**2
}

function h(x, fc){
   return fc(x)
}

console.log(h(3,fc))

// here h() is a higher order function

// and "fc(x)"" in returbn of h() is a callbackback function


console.log("start");
setTimeout(function(){
   console.log("wait is over")
},2000)


console.log("end");
for (let i = 0; i<10000000000; i++){}
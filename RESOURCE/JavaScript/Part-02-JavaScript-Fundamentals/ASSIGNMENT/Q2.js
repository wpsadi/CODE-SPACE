function bill(...cost){
   let amt = cost.reduce(
      function(acc,curr){
         return acc+curr
      },0)
   
   return(amt)
}

console.log(bill(10,20,30,40))
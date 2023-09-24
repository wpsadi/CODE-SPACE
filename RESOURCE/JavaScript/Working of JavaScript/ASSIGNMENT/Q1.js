console.log(addNumbers(1,2))




function addNumbers(...numbers){
   let sum = 0
   numbers.map(function(item){
      sum += item
   })

   return sum
}


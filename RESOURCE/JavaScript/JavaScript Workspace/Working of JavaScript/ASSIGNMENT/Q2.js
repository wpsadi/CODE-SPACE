console.log(MultiplyNumbers(1,2,10,20))




function MultiplyNumbers(...numbers){
   let prod = 1
   numbers.map(function(item){
      prod *= item
   })

   return prod
}


addNumbers(1,2)

function addNumbers(...numbers){
   var sum = 0
   numbers.map(function(item){
      sum += item
   })

   console.log(sum)
}


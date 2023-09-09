const pow2 = function(n){
   return n*n
}

const pow3 = function(n){
   return pow2(n)*n
}

console.log(pow3(3))


function Sayhello(){
   return () => {
      console.log("say-hello")
   }
}

guess = Sayhello()

console.log(guess)
guess()


const higherOrder = (n) =>{
   const secondOrder = (m) =>{
      const lastOrder = (p) =>{
         return m+p+n
      }
      return lastOrder
   }
   return secondOrder
}

console.log(higherOrder(1)(2)(3))

myNums = [10,20,30,40,50]

const SumArray = arr =>{
   let total = 0
   arr.forEach(function (item,index,arr){
      total += item
   });
   console.log(total)
}

SumArray(myNums)

// setInterval(Sayhello(), 3000)
setTimeout(Sayhello(), 1000)
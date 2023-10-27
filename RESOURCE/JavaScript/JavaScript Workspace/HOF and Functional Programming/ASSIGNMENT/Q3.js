x = function (){
   return  price*80
}

function USDtoINR(object,x){
   obj = new Object()

   for (i in object){
      item = i
      price = object[i]
      //1 USD = 80 INR

      
      obj[item] = x()
   }

   return obj
}

objct = {
   "pizza" : 8,
   "bread" : 2
}

console.log(USDtoINR(objct,x))
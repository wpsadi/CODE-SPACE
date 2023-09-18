function USDtoINR(object){
   obj = new Object()

   for (i in object){
      item = i
      price = object[i]
      //1 USD = 80 INR

      x = function (){
         return  price*80
      }
      
      obj[item] = x()
   }

   return obj
}

objct = {
   "pizza" : 8,
   "bread" : 2
}

console.log(USDtoINR(objct))
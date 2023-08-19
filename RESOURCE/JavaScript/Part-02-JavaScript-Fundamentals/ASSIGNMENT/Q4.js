const products = [
   { name: "Laptop",price: 120000},
   { name: "Mobile",price: 70000},
   { name: "Laptop Bag",price: 20000},
   { name: "Watch",price: 20000},
   { name: "Mobile Charger",price: 1500}
]
function max_n_min(){
   let maxProd = products[0].name
   let minProd = products[0].name
   let maxPrice = products[0].price
   let minPrice = products[0].price

   for (let x of products){

      if (maxPrice < x.price){
         maxPrice = x.price
         maxProd = x.name
      } 

      if (minPrice > x.price){
         minPrice = x.price
         minProd = x.name
      } 

   }
   console.log(`Product with max amt is ${maxProd} with the cost of ${maxPrice}`)
   console.log(`Product with min amt is ${minProd} with the cost of ${minPrice}`)
}

max_n_min()
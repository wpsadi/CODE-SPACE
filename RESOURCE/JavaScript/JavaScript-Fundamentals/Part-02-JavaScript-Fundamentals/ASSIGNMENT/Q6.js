const productDetails = {
   name: "Apple 2020 MacBook Air laptop",
   price: 82000,
   color: "grey",
   HardDisk: "256 GB"
}

function printDetails(obj=productDetails){
   console.log(`Here are specs of the device :`)
   console.log(`name: ${obj.name}`)
   console.log(`price: ${obj.price}`)
   console.log(`color: ${obj.color}`)
   console.log(`HardDisk: ${obj.HardDisk}`)
}

printDetails()
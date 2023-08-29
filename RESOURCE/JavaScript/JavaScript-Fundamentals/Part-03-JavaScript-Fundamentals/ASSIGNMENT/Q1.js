let obj = Object()

obj.make = "Tesla"
obj.model = "S Plaid"
obj.year = 2023

function display(){
   console.log(`the ${obj["make"]}\'s  cars for the year ${obj["year"]}:\n\
   Model ${obj["model"]}. A high-performance electric car with a top speed of 200 mph and a range of 390 miles. Starts at $104,590.`)
}

display()
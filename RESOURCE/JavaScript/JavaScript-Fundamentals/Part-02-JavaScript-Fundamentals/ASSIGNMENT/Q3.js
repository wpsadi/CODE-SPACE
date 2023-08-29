const students = [
   {
      name: "Oliver",
      marks: 89
   },
   {
      name: "Barry",
      marks: 97
   },
   {
      name: "John",
      marks: 90
   },
   {
      name: "Felicity",
      marks: 98
   },
   {
      name: "Kara",
      marks: 94
   }
]

function result(name){
   let found
   for ( let x of students){
       if (x.name == name && x.marks >= 90){
         found = true
         console.log(`Congrats! ${name}, You have cleared the exam`)
         break
       }
       else if (x.name == name && x.marks <= 90){
         found = true
         console.log(`Sorry! ${name}, You have not cleared the exam`)
         break
       }
   }

   if (found != true){
      console.log(`Invalid User`)
   }
}

result("Oliver")
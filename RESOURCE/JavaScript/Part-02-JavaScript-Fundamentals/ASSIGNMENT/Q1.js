list_of_users = ["Noah", "Liam", "Oliver", "Elijah", "William", "James", "Benjamin", "Lucas", "Henry", "Alexander", "Elijah", "Barry"]

function isUserPresent(name){
   let found =0
   for  (let x of list_of_users) {
      if (x === name){
         found=1
         break
      }
   }

   // console.log(found)
   if (found == 1){
      console.log(`Yes ${name} is a valid user.`)
   }
   else{
      console.log(`No ${name} is not a valid user.`)
   }
}
isUserPresent("Oliver")
isUserPresent("Cisco")
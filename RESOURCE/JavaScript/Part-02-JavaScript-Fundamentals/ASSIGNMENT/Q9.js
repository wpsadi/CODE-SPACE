let user  = "aditya"
// console.log(user)

set_user =new Set(user.split(""))

if (set_user.size ==user.length ){
   console.log("Unique letters in name")
}

else{
   console.log("Repetition found")
}
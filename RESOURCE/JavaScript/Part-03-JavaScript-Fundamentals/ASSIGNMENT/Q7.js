let map = new Map()
let data ={
   name : "aditya",
   age : 17,
   ph : 4356654645
}
// map.set(username , data)
map.set("wpsadi" , data)

data ={
   name : "aayush",
   age : 18,
   ph : 73854574574
}
map.set("pandeyg" , data)

data ={
   name : "harsh",
   age : 18,
   ph : 1234567890
}
map.set("iitian" , data)

function user_existence_check(username){
   if (Array.from(map.keys()).includes(username) == true){
      return true
   }
}

function change(username , field, value){   
   for (let i of map.entries()){
      if (i[0] == username){
         i[1][field] = value 
         break
      }
   }
   console.log("Updated Successfully")
}

function remove(username, field){
   for (let i of map.entries()){
      if (i[0] == username){
         delete i[1][field]
         break
      }
   }
}

username = "wpsadier"
field = "ph"
value = 8765432109


if (user_existence_check(username) == true){
   change(username , field, value)
   remove(username, field)
   console.log(map)
}

else{
   console.log(`No such username found`)
}
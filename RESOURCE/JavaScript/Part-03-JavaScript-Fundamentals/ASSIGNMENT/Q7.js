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

function add(username , field, value){

}

function remove(username, field){

}

username = "wpsadi"
field = "ph"
value = 8765432109


if (user_existence_check(username) == true){

}

else{
   console.log(`No such username found`)
}
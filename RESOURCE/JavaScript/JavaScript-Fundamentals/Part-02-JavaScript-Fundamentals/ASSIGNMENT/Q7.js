function OTP_Gen(){
   let OTP
   OTP = `${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}${Math.floor(Math.random()*10)}`
   console.log(`Your OTP is ${OTP}`)
}

OTP_Gen()
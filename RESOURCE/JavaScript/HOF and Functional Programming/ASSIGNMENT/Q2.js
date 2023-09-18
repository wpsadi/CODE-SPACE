function randomGen(){
   randomNo = Math.floor((Math.random())*10)
   return randomNo
}

delay = 3 // enter the delay in seconds

function printTime(){
   if (delay == 0 ){
      clearInterval(x)
      console.log(randomGen())
   }
   else{
      console.log(`Time Left: ${delay} seconds`)
      delay -= 1
   }
}


 x= setInterval(printTime,1000)

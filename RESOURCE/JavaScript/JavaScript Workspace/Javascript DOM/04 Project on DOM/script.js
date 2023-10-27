const button = document.getElementById("btn")
const container = document.getElementById("container")
const colorText = document.getElementById("text")
console.log(colorText.innerText)

const hex_array = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


function func(){
   let hex_new_color = hex_gen()
   // alert(`Do you see the change in Background Color ? It is ${hex_new_color}`)

   container.style.background = hex_new_color
   colorText.innerText = hex_new_color

}

button.addEventListener("click", func)


// setTimeout(function(){
//    button.removeEventListener("click", func)
// },1000)


function hex_gen(){
   
   let hex_color = `#`

   for (let i = 0; i<6 ; i++){
      hex_color += `${hex_array[Math.floor((Math.random()*hex_array.length))]}`
   }
   
   return hex_color
}



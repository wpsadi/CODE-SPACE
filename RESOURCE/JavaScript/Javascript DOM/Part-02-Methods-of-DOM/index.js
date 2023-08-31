// console.dir(document.URL)

// console.log(document.domain)
// console.log(document.body)

// console.log(document.all[5])

// console.log(document.head)

document.title = "Learn Eureka"



// const body = document.body
// add text
// body.append("bye" , " hello everyone") // can add text
// body.appendchild() //can't add text

// create new element
// const div = document.createElement("div")

// addding text in div
// div.innerText = "this is js"
// div.textContent = "why"

// const firstDiv = document.querySelector("div")
// console.log(firstDiv.textContent)

// body.append(div)
// body.appendChild(div)
// console.log(div)


const body = document.body

// strong element
// const div = document.createElement("div")
// body.append(div)
// let strong = document.createElement("strong")

// strong.innerText = "this is supposed to be strong"
// strong.classList = "hima"
// div.append(strong)

// console.log(strong.innerText)


// let div = document.createElement("div")
// div.innerText = "<strong>this is supposed to be strong </strong>"
// body.append(div)



// let div = document.createElement("div")
// div.innerHTML = "<strong>this is supposed to be strong </strong><i>good luck</i>"
// body.append(div)




// remove elements

const div = document.querySelector('div')

const span_one = document.getElementById("one")
const span_two = document.getElementById("two")

// span_two.remove()

// div.removeChild(span_one)

// attributes properties and methods

console.log(span_one.getAttribute("name"))
span_two.setAttribute("name", "hos")

span_one.removeAttribute("name")


span_one.id = "aditya"


// classes

span_two.classList.add("text-change")
span_two.classList.add("text-color")

// span_two.className = "bgc bg color text"

span_one.classList.toggle("new-class") //if tyhe class is present in html doc then it will remove it or else it will remove it

// style
span_one.style.setProperty("color" ,"green")
span_two.style.color = "red"
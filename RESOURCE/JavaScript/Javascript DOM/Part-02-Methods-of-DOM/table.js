console.log(document)

const body = document.body

let table = document.createElement("table")

table.setAttribute("border", 4)
table.setAttribute("cellpadding", 10)
table.setAttribute("cellspacing", 0)
table.align = "center"


let tr,td,th,br,thead,tbody
let div
thead = document.createElement("thead") 
tbody = document.createElement("tbody")


tr = document.createElement("tr")
tr.height = 50
tr.width = 100

   th = document.createElement("th")
   th.innerText = "Day/Period"
   tr.append(th)

   th = document.createElement("th")
   th.innerHTML = `
   I <br>
   9:30-10:20
   `
   tr.appendChild(th)

   th = document.createElement("th")
   div = document.createElement("div")
   div.innerText = "II"
   th.append(div)
   div = document.createElement("div")
   div.innerText = "10:20-11:10"
   th.append(div)
   tr.appendChild(th)

   th = document.createElement("th")
   div = document.createElement("div")
   div.innerText = "III"
   th.append(div)
   div = document.createElement("div")
   div.innerText = "10:20-11:10"
   th.append(div)
   tr.appendChild(th)

   th = document.createElement("th")
   th.innerText = "12:00-12:40"
   tr.appendChild(th)

   th = document.createElement("th")
   div = document.createElement("div")
   div.innerText = "IV"
   th.append(div)
   div = document.createElement("div")
   div.innerText = "12:40-1:30"
   th.append(div)
   tr.appendChild(th)
   
   th = document.createElement("th")
   div = document.createElement("div")
   div.innerText = "V"
   th.append(div)
   div = document.createElement("div")
   div.innerText = "1:30-2:20"
   th.append(div)
   tr.appendChild(th)

   th = document.createElement("th")
   div = document.createElement("div")
   div.innerText = "VI"
   th.append(div)
   div = document.createElement("div")
   div.innerText = "2:20-3:10"
   th.append(div)
   tr.appendChild(th)

   th = document.createElement("th")
   div = document.createElement("div")
   div.innerText = "VII"
   th.append(div)
   div = document.createElement("div")
   div.innerText = "3:10-4:00"
   th.append(div)
   tr.appendChild(th)

thead.append(tr)
table.appendChild(thead)


tr = document.createElement("tr")
tr.height = 50
tr.width = 100

   th = document.createElement("th")
   th.innerText = "Monday"
   tr.append(th)

   td = document.createElement("td")
   td.innerText = "Eng"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Mat"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Che"
   td.style = "text-align:center"
   tr.append(td)

   th = document.createElement("th")
   th.innerHTML = "L<br>U<br>N<br>C<br>H"
   th.style = "text-align:center; vertical-align:center"
   th.setAttribute("rowspan", 6)
   tr.append(th)

   td = document.createElement("td")
   td.innerText = "lab".toUpperCase()
   td.style = "text-align:center"
   td.setAttribute("colspan" , 3)
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Phy"
   td.style = "text-align:center"
   tr.append(td)
tbody.append(tr)

tr = document.createElement("tr")
tr.height = 50
tr.width = 100

   th = document.createElement("th")
   th.innerText = "Tuesday"
   tr.append(th)

   td = document.createElement("td")
   td.innerText = "lab".toUpperCase()
   td.style = "text-align:center"
   td.setAttribute("colspan" , 3)
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Eng"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Che"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Mat"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Sports".toUpperCase()
   td.style = "text-align:center"
   tr.append(td)

tbody.append(tr)


tr = document.createElement("tr")
tr.height = 50
tr.width = 100

   th = document.createElement("th")
   th.innerText = "Wednesday"
   tr.append(th)

   td = document.createElement("td")
   td.innerText = "Mat"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Phy"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Eng"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Che"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "lab".toUpperCase()
   td.style = "text-align:center"
   td.setAttribute("colspan" , 3)
   tr.append(td)

tbody.append(tr)


tr = document.createElement("tr")
tr.height = 50
tr.width = 100

   th = document.createElement("th")
   th.innerText = "Thursday"
   tr.append(th)

   td = document.createElement("td")
   td.innerText = "Phy"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Eng"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Che"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "lab".toUpperCase()
   td.style = "text-align:center"
   td.setAttribute("colspan" , 3)
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Mat"
   td.style = "text-align:center"
   tr.append(td)

tbody.append(tr)


tr = document.createElement("tr")
tr.height = 50
tr.width = 100

   th = document.createElement("th")
   th.innerText = "Friday"
   tr.append(th)

   td = document.createElement("td")
   td.innerText = "lab".toUpperCase()
   td.style = "text-align:center"
   td.setAttribute("colspan" , 3)
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Mat"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Che"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Eng"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Phy"
   td.style = "text-align:center"
   tr.append(td)

tbody.append(tr)


tr = document.createElement("tr")
tr.height = 50
tr.width = 100

   th = document.createElement("th")
   th.innerText = "Saturday"
   tr.append(th)

   td = document.createElement("td")
   td.innerText = "Eng"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Che"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "Mat"
   td.style = "text-align:center"
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "seminar".toUpperCase()
   td.style = "text-align:center"
   td.setAttribute("colspan" , 3)
   tr.append(td)

   td = document.createElement("td")
   td.innerText = "sports".toUpperCase()
   td.style = "text-align:center"
   tr.append(td)

tbody.append(tr)

table.append(tbody)
body.append(table)
let eventDate
eventDate = "2023-09-30"

let Edate, Emonth, Eyear
Edate = eventDate.split("-")[2]
Emonth = eventDate.split("-")[1]
Eyear = eventDate.split("-")[0]

let dT = new Date()

let Cdate, Cmonth, Cyear
Cdate = dT.getDate()
Cmonth = dT.getMonth()+1
Cyear = dT.getFullYear()

function DiffDate(){
   // console.log(Edate - Cdate)
   return Edate - Cdate

}
function DiffMonth(){
   // console.log(Emonth - Cmonth)
   return Emonth - Cmonth

}
function DiffYear(){
   // console.log(Eyear - Cyear)
   return Eyear - Cyear
}

console.log(`${  DiffDate() + (DiffMonth()*30) + DiffYear()*365}  Days`)
function ageInDays(person, logResult){
    return logResult(person)
}

function logResult(person){
    console.log(`The person's full name is ${person.split(",")[0]}, and their age in days is ${Number(person.split(",")[1])*365}.`)
}

ageInDays("George S,20",logResult)
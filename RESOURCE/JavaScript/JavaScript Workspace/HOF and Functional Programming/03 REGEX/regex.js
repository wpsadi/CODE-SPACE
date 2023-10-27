let pattern = "pw"

let regExOne = new RegExp(pattern)

let flag = "gi"  // here "g" stands for global & "i" means case insensitive


let regExTwo = new RegExp(pattern,flag)

let regExThree = /pw/gi

const strToCheck = "Please Pw pw pw pw PW pw pw pW me the pwcontent to the pw internet."

const result = regExOne.test(strToCheck)
console.log(result)

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult)

const oneMoreResult = strToCheck.replace(regExThree,"p-w")
console.log(oneMoreResult)

let webURL = "https://pwsills.com/aditya%30Wpsadi"

let newURL = webURL.replace(/%\d0/,"-")
console.log(newURL)

//learn regex from www.regexr.com
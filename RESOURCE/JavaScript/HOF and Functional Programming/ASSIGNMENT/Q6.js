function URLvalidator(url){
   rex = /^http(s|)\:\/\/(www\.|)linkedin\.com\/in\/(\w|\d|\_|\:|\-)+(\w|\d)$/gi

   return rex.test(url)
}

urlHere = "http://linkedin.com/in/fushiyama"
console.log(URLvalidator(urlHere))
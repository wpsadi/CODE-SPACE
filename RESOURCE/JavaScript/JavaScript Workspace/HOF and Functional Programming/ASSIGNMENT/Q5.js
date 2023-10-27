function URLvalidator(url){
   rex = /http(s|)\:\/\/(.+)\.\w+/gi

   return rex.test(url)
}

urlHere = "https://google.com"
console.log(URLvalidator(urlHere))
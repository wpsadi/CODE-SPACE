fetch("https://type.fit/api/quotes")
.then(function (response){
    console.log(response)
    return response.text();
}).then(function(value){
    console.log(typeof value)
})
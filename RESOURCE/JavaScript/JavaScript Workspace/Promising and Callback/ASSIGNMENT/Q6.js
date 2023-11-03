url = "https://jsonplaceholder.typicode.com/todos/1"

function api(url){
    return fetch(url).then((response) =>{
        return (response.text())
    }).then((response) =>{
        console.log(response)
    })
}

x = api(url)
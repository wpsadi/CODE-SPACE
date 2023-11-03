url = "https://jsonplaceholder.typicode.com/posts"

function api(url){
    return fetch(url).then((response) =>{
        return (response.text())
    }).then((response) =>{
        console.log(response)
    })
}

x = api(url)
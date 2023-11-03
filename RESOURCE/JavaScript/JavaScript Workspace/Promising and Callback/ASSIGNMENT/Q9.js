

url = "https://jsonplaceholder.typicode.com/posts/123456789"

function api(url) {
    let y = fetch(url)
    y.then(function (res) {
        if (res.ok == false) {
            console.log("Error", res.ok)
        }
    })


}

x = api(url)
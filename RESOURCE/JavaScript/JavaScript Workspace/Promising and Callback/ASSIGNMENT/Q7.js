let endpoint1 = "https://jsonplaceholder.typicode.com/todos/1"

let endpoint2 = "https://jsonplaceholder.typicode.com/posts/1"

x = function(endpoint1,endpoint2){

    let obj = new Object()
    p1 = fetch(endpoint1).then( function(res){
        return res.text();
    }).then( function(val){
        // console.log(val)
        obj["todos"] = val;
    })

    p2 = fetch(endpoint2).then( function(res){
        return res.text();
    }).then( function(val){
        // console.log(val)
        obj["post"] = val
    })

    return obj;
}
z = x(endpoint1,endpoint2)

console.log(z)
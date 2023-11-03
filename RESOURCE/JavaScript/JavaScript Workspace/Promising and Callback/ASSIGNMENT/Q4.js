const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", year: 1979 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

f1(books,f2)

function f1(list,f2){
    let arr = new Array();

    list.map( function(item,index,array){
        arr.push((item.title).trim())
    })

    return f2(arr)
}

function f2(array){
    array = array.sort();

    console.log(array)
}
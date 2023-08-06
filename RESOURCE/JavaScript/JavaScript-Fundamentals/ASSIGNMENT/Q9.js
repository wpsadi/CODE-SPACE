const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];

for (i=0; i<arr.length ; i++){
    if (typeof arr[i] == "string"){
        console.log("First string in the array is => "+arr[i])
        break
    }
}
// declaration of array

// using square bracket


// let arrayy = [10,20,30,40]
// console.log(Array.isArray(arrayy))
// console.log(arrayy)


// using array constructor
// let fruits = new Array("Apples", "bananas", "mango")
// console.log(fruits)

// let fruits = new Array(5)
// console.log(fruits)


// using Array literal
// let mixedArray = Array("apple", true, 5, {name: "aditya"})
// console.log(mixedArray)

// access of array
// let nums = [10,20,30,40]
// console.log(nums[0])
// console.log(nums[4])

// nums[2] = true
// console.log(nums)

// deleting from array
// delete nums[2]
// console.log(nums) // [ 10, 20, <1 empty item>, 40 ]


// iteration in arrays
let nums = [10,20,30,40,50,60]
// for (let i=0; i<nums.length; i++){
//    console.log("at index "+i+ " holds value =>"+nums[i])
// }

// let i=0
// while (i<nums.length){
//    console.log("at index "+i+ " holds value =>"+nums[i])
//    i++
// }


// for of loop
for (let num of nums){
   console.log("holds value =>"+num)
}
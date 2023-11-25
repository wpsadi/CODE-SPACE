// spread and rest operator

// spread - iterate
   // -- can create new arrays
   let arr = [1,2,3,5]
   let newArr = [...arr];

   console.log(newArr)


   // -- can add new values
   newArr = [...arr,40];

   let obj1 = {
      1:"hi",
      2:"bye"
   }

   let obj2 = {...obj1,3:"no"};

   console.log(obj2);
   // -- concatinate 2 arrays

   let arr1 = [10,20]
   let arr2 = [30,40]

   let arr3 = [...arr1,...arr2];
   console.log(arr3)

   // -- spread an array of arguments as individual
   let arrX = [4,6,5];
   function maxN(a,b,c){
      return Math.max(a,b,c)
   }

   console.log(maxN(4,6,5))

   // -- can be use with 
      //strings
      let str1 = "aditya";

      let str2 = [...str1+" hi"]

      console.log(str2)
      
      //objects

      let objA = {
         1:"hi",
         2:"bye"
      };

      let objB = {
         2:"hi",
         3:"bye"
      };

      let objZ = {...objA,...objB}//note here s a difference in syntax

      console.log(objZ)



// Rest Operators - individual to a array

//collecting all remaining parameter in a function
function summ(...arrr){
   return arrr.reduce(function(curr,acc){
      return curr+acc
   },0)
}

console.log(summ(1,2,3,4))

// destructuring

let arrV = [10,20,30,40]

let [a,...rem] = arrV;

console.log(rem)
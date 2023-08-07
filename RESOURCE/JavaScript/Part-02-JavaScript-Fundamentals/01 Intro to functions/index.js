function fibo(n,a=0,b=1){
   n-=1
   c=a
   a=a+b
   b=c
   if (n>0){
      fibo(n,a,b)
   }

}

console.log(fibo(20))
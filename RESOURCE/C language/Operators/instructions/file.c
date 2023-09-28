#include <stdio.h>

int main(){
   //valid instructions
   int a = 22;
   int b = a;
   int c = b -1;
   int d = 1, e;   /* here 1 is stored in d and there is also
     a variable "e" that is created but it doesn't have any value right now*/


   // invalid instructions
   int x = 1;
   int y = x + z; // here z is declared after it its usage so it will crate an error
   int z = 5

   int x = y = z = 4
   /*this line will also give error because y gets value of z 
   but z hasn't completely received the value because the line has other content in it
   
   
   Inference:
   we always have to declare a variable before it assignment*/
   return 0;
}
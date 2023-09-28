// you have to ask user length of side of a square and then you have to calculoatye the area of that square

#include <stdio.h>

int main(){
   float side;
   printf("Enter the side of a square : ");
   scanf("%f",&side);
   
   float area  = side**2;

   printf("\nArea of the square : %f", area);


   return 1;
}
#include <stdio.h>

int main(){
   float length, breadth;

   printf("Length of the rectangle :");
   scanf("%f",&length);

   printf("\nBreadth of the rectangle :");
   scanf("%f",&breadth);

   float area = length*breadth;

   printf("\nArea of rectangle is : %f",area);

   return 0;
}
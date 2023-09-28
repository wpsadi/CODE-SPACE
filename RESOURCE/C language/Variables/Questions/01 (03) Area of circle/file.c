#include <stdio.h>

int main(){
   float pi = 3.14;
   float radius;

   printf("Radius of circle :");
   scanf("%f",&radius);

   float area = pi*radius*radius;

   printf("Area of circle : %f",area);

   return 0;
}
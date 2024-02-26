
1. Interface Definition:
Define an interface named Person with the following properties:

name of type string
age of type number
email of type string | undefined


2. Type Aliases:
Create a type alias named Coordinate for a tuple representing latitude and longitude, where both latitude and longitude are of type number.

3. Object Initialization:
Initialize an object of type Person with the following values:

name: "John"
age: 30
email: undefined


4. Union Types:
Define a function padLeft that takes two parameters: input, which can be either a string or a number, and padding, which is a string. The function should return a string with the padding applied to the left of the input.

5. Optional Properties:
Modify the Person interface from question 1 to make email an optional property.

6. Intersection Types:
Create a type named Admin that is an intersection of Person and an additional property isAdmin of type boolean.

7. Type Assertions:
Convert the following variable input to a string type using type assertion:

typescript
Copy code
let input: any = 5;


8. Array Types:
Define a type alias named Matrix for a two-dimensional array of numbers.


9. Mapped Types:
Create a mapped type named ReadOnly<T> that takes an object type T and makes all its properties readonly.


10. Type Guards:
Implement a type guard function named isString that checks if a given value is of type string:
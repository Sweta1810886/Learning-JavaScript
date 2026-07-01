// variable is a container used to store data values. In JavaScript, you can declare a variable using the `var`, `let`, or `const` keywords.

// - `var`: This keyword is used to declare a variable that can be re-assigned and has function scope. However, it is generally recommended to avoid using `var` in modern JavaScript due to its quirks and potential for unexpected behavior.
// - `let`: This keyword is used to declare a variable that can be re-assigned and has block scope. It is the preferred way to declare variables in modern JavaScript.
// - `const`: This keyword is used to declare a variable that cannot be re-assigned and has block scope. It is the preferred way to declare variables that should not be changed after their initial assignment.


//let
let age;    //declaration of variable
age = 25;     //initialization 
console.log(age); // Output: 25

let a=12;
a=4;       // reassignment of variable
console.log(a); // Output: 4


//var 
var name = "Jatin"; // declaration and initialization
// console.log(name); // Output: Jatin
var name = "sara";
console.log(name); // Output: sara

//const
const pi = 3.14;
console.log(pi); // Output: 3.14
// pi = 23; // This will throw an error because `pi` is a constant and cannot be reassigned.   


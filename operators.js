// Operators are symbols that perform operations on variables and values. In JavaScript, operators can be categorized into several types, including arithmetic, assignment, comparison, logical, and more. Each operator serves a specific purpose in manipulating data and controlling the flow of a program.

/*Arithmetic Operators
let x = 10;
let y = 5;  
console.log(x + y); // Output: 15 (Addition)
console.log(x - y); // Output: 5 (Subtraction)
console.log(x * y); // Output: 50 (Multiplication)
console.log(x / y); // Output: 2 (Division)
console.log(x % y); // Output: 0 (Modulus)
console.log(x ** y); // Output: 100000 (Exponentiation) 
*/

/*Assignment Operators
let x = 10;
x += 5; // Equivalent to x = x + 5
console.log(x); // Output: 15
let a=8;
a %= 2;
console.log(a); // Output: 0 (Modulus assignment)
 */

/*Comparison Operators
console.log(5 == "5"); // Output: true (loose equality, type coercion occurs)
console.log(5 === "5"); // Output: false (strict equality, no type coercion)
console.log(5 != "3"); // Output: true (loose inequality)
console.log(5 !== "5"); // Output: true (strict inequality)
*/

/*logical Operators
let p = 50;
let q = 30;
console.log(p>=50 && q<=30);   Output: true (logical AND)
console.log(p<60 || q>40);     Output: true (logical OR  )
console.log(!(p == 50));       Output: false (logical NOT)
*/

/*Increment and Decrement Operators
let s = 10;
let y = s++;
console.log(y); // Output: 10 (post-increment)
console.log(s); // Output: 11 (s is now 11)

let m = 12;
let n = ++m;
console.log(n); // Output: 13 (pre-increment)

let a = 15;
let b = a--;
console.log(b); // Output: 15 (post-decrement)
console.log(a); // Output: 14 (a is now 14)

let c = 20;
let d = --c;
console.log(d); // Output: 19 (pre-decrement)   
*/

/*Ternary operator
let age = 21;
let result = age>=18? "Vote" : "Can't vote!";
console.log(result);
*/

/*Bitwise operator
console.log(5&3);
console.log(8 | 2);
console.log(~(0));
*/


/*short circuiting
console.log("" || undefined || null || "Rahul" || false);
console.log("Sweta" && null && "tisha" && "Rhea" && undefined)
*/
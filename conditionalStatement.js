//A conditional statement in java script is used to make decisions.
// It runs on the basis of some conditions.

// 1. Find the greatest of three numbers. Numbers are given by the user
/*
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let num3 = Number(prompt("Enter the third number: "));

if(num1>num2 && num1>num3){
    console.log(`First number ${num1} is greatest.`);
}else if(num2>num1 && num2>num3){
    console.log(`Second number ${num2} is greatest.`);
}else{
    console.log(`Third number ${num3} is greatest.`)
}
*/

/* 2. Write a program to manage Role-Based Access Control.

Given a user role ("admin", "editor", "viewer"):

Admin: full access
Editor: edit access
Viewer: read-only
Any other: no access

Use switch. */

/*
let user_role = "admin";

switch(user_role){
    case "admin":
        console.log("Full access");
        break;
    
    case "editor":
        console.log("Edit access");
        break;

    case "viewer ":
        console.log("Read-only");
        break;
        
    default:
        console.log("No access");
}
*/


/* 3. Check if a number is divisible by 3 or 5 or both.

Print:

"Fizz" for multiples of 3
"Buzz" for multiples of 5
"FizzBuzz" for multiples of both
*/

/*
let num = 9;

if(num%3===0 && num%5===0){
    console.log("FizzBuzz");
}else if(num % 3===0){
    console.log("Fizz");
}else if(num%5===0){
    console.log("Buzz")
}else{
    ("Number is neither multiple of 3 nor 5");
}
*/


/* 5. Create a simple calculator.

Take two numbers and an operator (+, -, *, /) and calculate the result using switch. */

/*
let num1 = Number(prompt("Enter first number:"));
let operator = prompt("Enter the operator(+,-,*,/):");
let num2 = Number(prompt("Enter second number:"));

switch(operator){
    case "+":
        console.log(`${num1}  +  ${num2}  =  ${num1 + num2}`);
        break;
    case "-":
        console.log(`${num1}  -  ${num2}  =  ${num1 - num2}`);
        break;
    case "*":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "/":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
}
*/

/* Q.6

Create a simple ATM program.

User can choose:

Check Balance
Deposit
Withdraw
Exit
*/

/*
let totalBalance = 10000;
let userChoice = Number(prompt("Enter your choice[1 .Check Balance 2.Deposit 3.Withdraw 4.Exit]"));

if(userChoice === 1){
    console.log(`Your current balance is ${totalBalance}`);
}else if(userChoice === 2){
    let depositAmount = Number(prompt("Enter the amount to deposit:"));
    if(depositAmount >=1){
        totalBalance += depositAmount;
        console.log(`Your current balance is ${totalBalance}`);
    }else{
        console.log("Please enter valid amount")
    }  
}else if(userChoice === 3){
    let withdrawAmount = Number(prompt("Enter the amount to withdraw"));
    if(withdrawAmount>totalBalance || withdrawAmount<1){
        console.log("Enter a valid amount");
    }else{
        totalBalance = totalBalance - withdrawAmount;
        console.log(`Your current balance is ${totalBalance}`);
    }
}else if(userChoice === 4){
    console.log("Thank you for choosing us!");

}else{
    ("Invalid choice!");
}
*/
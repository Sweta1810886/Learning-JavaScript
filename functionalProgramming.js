//******imperative programming*******
// let arr = [1, 6,8,3,9,5];
// let double = [];

// for(i=0; i<arr.length; i++){
//     double.push(arr[i]*2);
//     console.log(double);
// }

// *****declarative programming****
// let arr=[2,4,6,9,6];
// let double = arr.map((el)=>{
//     return (el*2);
// })
// console.log(double);

//  <--------------Functional Programming---------------->

//  Pure function: Returns same output for same input
// function add(a,b){
//     return a+b;
// }
// let sum = add(5,7);
// console.log(sum);

//  Impure function

// let count = 0;
// function increment(){
//     count++;
// }


// <---------- Higher order function and callback function ---------->

// function greet(){            //first order function
//     return "Hello";
// }

// function sendMessage(fun, name){  //Higher order function
//     return fun + " " + name;
// }

// let sendMsg = sendMessage(greet(), "Sweta");
// console.log(sendMsg);



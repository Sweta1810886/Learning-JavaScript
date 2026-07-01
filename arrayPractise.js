// 1. For an array with marks of students find the average marks of the entire class.

let marks = [85, 90, 76, 89, 95, 87, 75];

let avgMarks = marks.reduce((acc, curr)=>{
    return (acc + curr)/marks.length;
})

console.log("Average marks = ", avgMarks.toFixed(2));


// 2. Create an array with the given length (n) and fill with 0.

let n = 50;
let array = new Array(n).fill(0);
console.log(array);


// 3. Consider an array of MCU heroes (ironman, captain, black widow, wanda, hulk, black panther).

//    Now:

//    a) Add spiderman at the end and thor at the start.

//    b) Remove black widow and add hawkeye in its place.

//    c) Check whether captain is present in the array.

let MCU_Heroes = ["ironman", "captain", "blackWidow", "wanda", "hulk", "blackPanther"];
console.log("Original array: ", MCU_Heroes);

MCU_Heroes.push("SpiderMan");
MCU_Heroes.unshift("Thor");

let index = MCU_Heroes.indexOf("blackWidow");
MCU_Heroes[index] = "Hawkeye";

console.log("New Array: ", MCU_Heroes);

let bool = MCU_Heroes.includes("captain");
console.log("Whether captain is present? ", bool);


// 5.  We have three variables a, b, c, d.
//    - a contains any number,
//    - b contains any string,
//    - c contains any object,
//    - d contains any array.
//Can we create an array from all these four variables? If yes, how?

let a =12;
let b = "String";
let c = {
    name: "Sweta",
    city: "Gaya"
};
let d = [1, 3, 5];

let newArray = Array.of(a, b, c, d);
console.log(newArray);



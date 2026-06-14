//Arrays: ordered collection of items

let fruits = ["apple", "mango", "banana"]
console.log(fruits);

//accessing array elements
console.log(fruits[0]);
console.log(fruits[1]);

//changing the array element
fruits[1]="litchi";
console.log(fruits);

//array push & pop
fruits.push("orange");
fruits.push("grapes");
console.log(fruits);

let poppedFruit = fruits.pop();
console.log("Popped fruits is ", poppedFruit)
console.log(fruits);

//unshift: adds elements in the beginning
fruits.unshift("kiwi");
console.log(fruits);

//shift: Removes element from start
fruits.shift()
console.log(fruits)
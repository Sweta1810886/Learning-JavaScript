//creation of array
let array = [1, 2, [3, 4],5];
console.log(array);
console.log(array.length);

//array using constructor method
let name = new Array("Sweta", "Swarna", "Shreyansh");
console.log(name);

//indexing
console.log(array[1]);
console.log(array[2]);

//accessing array element
let colors = ["red","yellow", "pink", "green", "blue"];

for(let i=0; i<colors.length; i++){
    console.log(colors[i]);
}

for(let color of colors){      //gives element of the array
    console.log(color);
}

for(let el in colors){          //gives index of the array element
    console.log(el)
}


//Array methods
let arr_list = ["Sweta", "HU", 20, 247667];
console.log("Original array: ", arr_list);

//push
arr_list.push("Gaya");
arr_list.push("Roorkee");
console.log("Array after push: ", arr_list, arr_list.length);

//pop
arr_list.pop();
console.log("Array after pop: ", arr_list, arr_list.length);

//unshift
arr_list.unshift("Intro");
console.log("Array after unshift: ", arr_list, arr_list.length);

//shift
arr_list.shift();
console.log("Array after shift: ", arr_list, arr_list.length);


//slice
let newArr_list = arr_list.slice(1,3);
console.log(newArr_list);

//concatenate array
let arr1 = [1,2,3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2);
console.log("Array after concatenation: ", newArr);

//spread operator
let studentInfo = [...arr_list];
console.log(studentInfo);

//join
let fruits = ["mango", "litchi", "guava", "apple"];
let test = fruits.join(" or ");
console.log(test);


//includes
let bool = fruits.includes("litchi");
console.log(bool);

//toString
fruits.toString();
console.log(fruits);

//indexOf
console.log(fruits.indexOf("apple"));
console.log(fruits.indexOf("guava"));

//sort
let students = ["suzuka", "giyan", "nobita", "degi suki", "doraemon", "sunio"];

console.log("Original student array: ", students);
students.sort();
console.log("student array after sort: ", students);


// Array iteration method


//map
let numbers = [3, 5,67,29,20,45];
console.log("Original number array: ", numbers);

let double = numbers.map((num)=>{
    return num*2;
});

console.log("New Array: ", double);

//forEach
let nums = numbers.forEach((num)=>{
    console.log(num)
})


//filter
let even = numbers.filter((num)=>{
    return num%2===0;
});
console.log("New Array: ", even);


//reduce
let sum = numbers.reduce((acc, curr)=>{
    return acc+curr;
}, 0);

console.log("Sum of elements: ", sum);



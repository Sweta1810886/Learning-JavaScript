/*1. Create a person object with properties: name, age, and city. Then:

   a) Log each property as: value of "name" property is "manas" using loop.
   b) Add a new property called email to the person object.
   c) Delete "city" property from person object.*/

// let person = {
//     name: "Swasti",
//     age: 20,
//     city: "Gaya"
// };

// for(let key in person){
//     console.log(`Value of ${key} is ${person[key]}`);
// }

// person.email = "swasti@gmail.com";
// delete person.city;

// console.log("New person object: ", person);


//2. Create a function that takes an object with firstName, middleName, lastName properties and returns the full name.
// let obj = {
//     firstName : "Utkarsh",
//     middleName: "Kumar",
//     lastName: "Singh"
// };

// let converToFullName = (param) => {
//     return (`${param.firstName} ${param.middleName} ${param.lastName}`);
// }

// let fullName = converToFullName(obj);
// console.log("Full name is: ", fullName);

// 3. Write a function that takes an object and returns the number of properties in the object.
// let object = {
//     name: "Swati",
//     age: 18,
//     city: "Gaya"
// };

// let numberOfKeys = Object.keys(object).length;
// console.log(numberOfKeys);


// 4. Write a function that returns an array of names of users who have the role "admin".
const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" }
];

function filterArray(arr, role){
    let filterItem = users.filter((item ) => {
        return item.role === role;
    });
    let newFilterItem = filterItem.map((item) => {
        return item.name;
    });

    return newFilterItem;
}

let resultArr = filterArray(users, "admin");
console.log(resultArr);
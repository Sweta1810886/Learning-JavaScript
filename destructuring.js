//Destructuring for objects
let person = {
    name: "Sweta",
    age: 20,
    city: "Gaya",
    language: ["Python", "Java", "JavaScript"]
};

let{name, age, city, language} = person;
console.log(name, age, city, language);

//Array destructuring
let arr = ["Sweta", "HU", 20, 247667];

let[item1, item2, item3, item4] = arr;
console.log(item1, item2, item3, item4);

//creation of object
let person = {
    name: "Sweta",
    age: 20,
    city: "Gaya",
    study: function(){
        return "Sweta is studying.."
    },
    language: ["Python", "Java", "JavaScript"]
};

console.log(person);
console.log(person.name);
console.log(person.study());

//object using constructor method
let obj = new Object({
    id: 21,
    course: "B.Tech"
});

//Object methods

let keys = Object.keys(person);
console.log("Keys are: ", keys);

let values = Object.values(person);
console.log("Values are: ", values);

let entries = Object.entries(person);
console.log("Entries are: ", entries);

let obj1 = {};
Object.assign(obj1, obj);
console.log(obj1);

Object.freeze(obj1);  // we can't change anything in this object
obj.city = "Gaya"; // this won't get added
console.log(obj1);

console.log(obj.hasOwnProperty("course"));
let firstName = "Sweta";
let lastName = "Bharti";

console.log(`My name is ${firstName} ${lastName}.`);

//constructor method to create string
let city = new String("Gaya");
console.log(city);


// //Indexing
let str = "Hello World";
console.log("Element at index 3 :", str[4]);
console.log("Element at index 6 :", str[6]);
console.log("Element at index 8 :", str[8]);

//Accessing the elements
for(let ch of str){
    console.log(ch)
}

//Properties
console.log(str.length);
console.log(city.length);

//Methods
let string = "AaBbCc";
let upperCaseString = string.toUpperCase();
console.log(string, upperCaseString);

let lowerCaseString = string.toLowerCase();
console.log(string, lowerCaseString);

let fullName = firstName.concat(lastName);
console.log(fullName);

let check = string.includes("BbC")
console.log(check);

console.log(string.indexOf("B"));
console.log(str.charAt(6));

let newStr = str.replace("Hello", "Hi");
console.log(newStr);

//slicing
let userName = "swetaBharti1018";
console.log(userName.slice(1,6));
console.log(userName.slice(-8, -2));


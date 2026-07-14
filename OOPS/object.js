//Object creation
// Student = {
//     name: "Sweta",
//     age: 20,
//     course: "B.Tech",
//     introduce: function(){
//         console.log(`My name is ${this.name} and I'm ${this.age} years old.`)
//     }
// }
// Student.introduce();

//Factory function

// function student(name, age, passion){
//     return {
//         myName: name,
//         age,
//         passion,
//         greet(){
//             console.log(`Hello! I'm ${this.myName}`);
//         }
//     };
// }

// let s1 = student("Sweta", 20, "photography");
// let s2 = student("Utkarsh", 22, "books");
// let s3 = student("Aisha", 19, "Cooking");

// s1.greet();


//constructor funcion
// function student(name, age){
//     this.name = name
//     this.age = age
//     return this;
// }

// let s1 = new student("Sweta", 20);
// console.log(s1);

// class syntax (es6)

class Student{
    constructor(name, age, course){
        this.name = name;
        this.age = age;
        this.course = course;
    }
}
let s1 = new Student("sweta", 19, "B.tech");
console.log(s1);
// function Student(name, age){
//     this.name = name;
//     this.age = age;
// }
// Student.prototype.introduceMyself = function(){         //prototype reduces extra space and saves memory.
//     console.log(`My name is ${this.name} and my age is ${this.age}.`);

// }

// let s1 = new Student("Sweta", 19);
// s1.introduceMyself();

//Bank function

// function BankAccount(holdersName, balance = 0){
//     this.holdersName = holdersName;
//     this.balance = balance;
// }
// BankAccount.prototype.deposit = function(balance){
//         this.balance = this.balance + balance;
// }
// BankAccount.prototype.withdraw = function(balance){
//     this.balance = this.balance - balance;
// }

// let swetaAccount = new BankAccount("Sweta", 1000);
// let utkarshAccount = new BankAccount("Utkarsh", 5000);

// swetaAccount.deposit(100);
// console.log(swetaAccount);


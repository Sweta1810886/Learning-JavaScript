class Car {
  constructor(name, color, mileage) {
    this.name = name;
    this.color = color;
    this.mileage = mileage;
  }
  start() {
    console.log(`${this.name} is starting...`);
  }
  stop() {
    console.log(`${this.name} is stopping...`);
  }
}

let car1 = new Car("BMW", "Dark Blue", 45);
let car2 = new Car("Toyota", "silver", 28);
let car3 = new Car("Buggati", "Brown", 5);

console.log(car1, car2, car3);

car1.start();
car1.stop();
export let buggati = new Car();

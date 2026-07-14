
// class Car{
//     #fuel = 100;  //private

//     burnFuel(){
//         this.#fuel -= 1;
//     }

//     start(){
//         this.burnFuel();
//         console.log("car is starting..");
//     }
// }
// let buggati = new Car();
// buggati.start();


//  <-------------Inheritance------------>
// class Car{
//     constructor(brand, color){
//        this.brand = brand;
//        this.color = color; 
//     }

//     start(){
//         console.log("Car is starting...");
//     }
//     stop(){
//         console.log("Car is stopping...");
//     }
// }
// class ElectricCar extends Car{
//     constructor(brand, color, battery){
//         super(brand,color);
//         this.brand = brand;
//         this.battery = battery;
//     }
//     charging(){
//         console.log("car is getting charged...");
//     }
// }

// let tesla = new ElectricCar("tesla", "black", 87);
// console.log(tesla);


// <----------Polymorphism------------->
// class MediaPlayer{
//     play(){
//         console.log("play media");
//     }
// }
// class Music extends MediaPlayer{
//     play(){
//         console.log("play music")
//     }
// }
// class video extends MediaPlayer{
//     play(){
//         console.log("play video")
//     }
// }

// let mus = new Music();
// let vid = new video();
// mus.play();
// vid.play();
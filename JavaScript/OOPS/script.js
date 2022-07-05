'use strict';

// const Person = function(firstName,birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
    
// }

// Person.prototype.calAge = function() {
//     console.log(2037 - this.birthYear);
// }

// shivam.calAge()
// priyam.calAge()



// console.log(Person.prototype)
// console.log(shivam.__proto__)


// console.log(shivam.__proto__.__proto__);
// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor)


/* Coding Challenge */

// function Car(make,speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log(this.speed)
// }

// Car.prototype.break = function(){
//     this.speed -= 10;
//     console.log(this.speed)
// }

// const bmw = new Car('bmw',120);
// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.break()
// const mercedes = new Car('mercedes',95);

// console.log(bmw.speed)

// class Person {
//     constructor (firstName,age) {
//         this.firstName = firstName;
//         this.age = age;
//     }
//     calcAge() {
//         console.log(2037 - this.age);
//     }
//     set fullname(name) {
//         if(name.includes(' ')){
//             this._fullname = name;
//         }else {
//             alert('Please Enter Full name');
//         }
//     }
//     get fullname() {
//         return this._fullname
//     }
//     static hey() {
//         console.log('shivm')
//     }
// }

// const shivam = new Person('shivam',2002);
// shivam.fullname = 'shivam Pandey'
// console.log(shivam.fullname)
// Person.prototype.greet = function() {
//     console.log('hello', this.firstName)
// }


// shivam.greet()


// const PersonProto = {
//     calcAge() {
//         console.log(2034 - this.birthYear);
//     }
// }

// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2022;

// steven.calcAge();
// console.log(steven);







// class Newcar {
//     constructor(make,speed) {
//         this.make = make;
//         this.speed = speed;
//     }
//     acclerate() {
//         this.speed += 10;
//         console.log(this.speed);
//     }
//     break() {
//         this.speed -= 10;
//         console.log(this.speed);
//     }
//     get speedUS() {
//         return this.speed / 1.6;
//     }
//     set speedUS(speed) {
//         this.speed = speed * 1.6;
//     }
// }

// const audi = new Newcar('ford',120);
// audi.break();
// console.log(audi);
// console.log(audi.speedUS);
// audi.speedUS = 111;
// console.log(audi.speed)


// const Student = function(firstName,birthYear,course) {
//     Person.call(this,firstName,birthYear);
//     this.course = course;
// }
// Student.prototype = Object.create(Person.prototype)
// Student.prototype.introduce = function() {
//     console.log(`hey this is ${this.firstName} and Birth Year is ${this.birthYear}`);
// }
// const priyam = new Student('shivam',1998,'computerScience');
// priyam.introduce();
// priyam.calAge();
// console.log(priyam)



// const Car = function (make,speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function() {
//     this.speed += 10;
//     console.log(this.speed);
// }

// Car.prototype.break = function() {
//     this.speed -= 10;
//     console.log(this.speed);
// }


// const EV = function(make,speed,charge) {
//     Car.call(this,make,speed);
//     this.charge = charge;
// }

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function(chargeTo) {
//     this.charge = chargeTo;
// }
// EV.prototype.accelerate = function() {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`Speed is ${this.speed} and charge is ${this.charge}`)
// }
// const tesla = new EV('tesla',100,23);
// tesla.accelerate();
// tesla.break();



// class Student extends Person {
//     constructor(firstName,birthYear,course) {
//         super(firstName,birthYear);
//         this.course = course;
//     }
//     introduce() {
//         console.log(`Hi this is ${this.firstName} and I am Studying ${this.course}`)
//     }   
// }

// const manas = new Student('manas',2000,'computer science');
// manas.calcAge();
// manas.introduce();

class Account {
    constructor(owner,currency,pin) {
        this.owner = owner;
        this.curreny = currency;
        this.pin = pin;
        this.movements = [];
        this.locale = window.navigator.language;
    }
    deposit(val) {
        this.movements.push(val);
    }
    withdraw(val) {
        this.movements.push(-val);
    }
}

const acc1 = new Account('Jonas', 'EUR',1111);
acc1.deposit(199);
acc1.deposit(200);
acc1.withdraw(100);
console.log(acc1.movements);
  
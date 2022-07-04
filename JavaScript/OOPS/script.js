'use strict';

// const Person = function(firstName,birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
    
// }

// const shivam = new Person('shivam','1989');
// const priyam = new Person('priyam',2003);
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

class Person {
    constructor (firstName,age) {
        this.firstName = firstName;
        this.age = age;
    }
    calcAge() {
        console.log(2037 - this.age);
    }
    set fullname(name) {
        if(name.includes(' ')){
            this._fullname = name;
        }else {
            alert('Please Enter Full name');
        }
    }
    get fullname() {
        return this._fullname
    }
    static hey() {
        console.log('shivm')
    }
}

const shivam = new Person('shivam',2002);
shivam.fullname = 'shivam Pandey'
console.log(shivam.fullname)
Person.prototype.greet = function() {
    console.log('hello', this.firstName)
}


Person.hey()
shivam.greet()


const PersonProto = {
    calcAge() {
        console.log(2034 - this.birthYear);
    }
}

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2022;

steven.calcAge();
console.log(steven);
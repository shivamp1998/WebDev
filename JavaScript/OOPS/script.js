'use strict';

const Person = function(firstName,birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    
}

const shivam = new Person('shivam','1989');
const priyam = new Person('priyam',2003);
Person.prototype.calAge = function() {
    console.log(2037 - this.birthYear);
}

shivam.calAge()
priyam.calAge()


console.log(shivam)
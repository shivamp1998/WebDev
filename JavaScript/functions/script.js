'use strict';
// const oneWord = function(str)   {
//     return str.replace(/ /g, '').toLowerCase();
// }

// const upperWord = function(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// const higherOrder = function (str,fn) {
//     console.log(`Original String: ${str}`);
//     console.log(`Modified String: ${fn(str)}`);
//     console.log(`Modified by ${fn.name}`)
// }

// higherOrder('shivam pandey',upperWord)
// higherOrder('this is the best day of my life',oneWord);


//function returning functions

// const greet = (greeting) => {
//     return (name) => {
//         return (`${greeting} ${name}`)
//     }
// }


// const greeter = greet('hey');
// console.log(greeter('shivam'));
// console.log(greet('hi')('guys'));

// const alterGreet = greeting => greet => console.log(`${greeting} ${greet}`);

// alterGreet('shivam')('pandey');

//call method in functions

// const airIndia = {
//     airline: 'airindia',
//     number: 'mh370',
//     bookings: [],
//     book( seatNum, name ) {
//         console.log(`${name} booked seat in ${this.airline} on seat Number ${seatNum} in flightNumber ${this.number}`);
//         this.bookings.push({name,seatNum})
//     }
// }


// airIndia.book(377,'shivam')
// console.log(airIndia)

// const vistara = {
//     airline: 'vistara',
//     number: 'ma543',
//     bookings: [],
// }
// const book = airIndia.book;
// book.call(vistara,123,'shivam')


// const addTax = (rate,value) => value + value * rate;

// const addVAT = (rate) => (value) => value + value + rate;
// const VAT = addVAT(0.25);
// console.log(VAT(2000))


//IIEE
// ( function () {
//     console.log("Hello World");
// })()

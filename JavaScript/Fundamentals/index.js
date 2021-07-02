'use strict';
//Coding Assignment 1
// let marksHeight = 1.69;
// let marksWeight = 78;
// let johnsHeight = 1.96;
// let johnWeight = 92;
//
//
// let BMImarks = (marksWeight) / (marksHeight ** 2);
// let BMIjohns = (johnWeight) / johnsHeight ** 2;
//
// console.log(BMImarks,BMIjohns)
// let markHigherBMI = false;
// if(BMImarks > BMIjohns)
//   markHigherBMI = true;
//
//
// if ( markHigherBMI == true){
//   document.querySelector(".answer").innerHTML = `Mark's BMI ${BMImarks} is higher than John's BMI ${BMIjohns}`;
// } else{
//   document.querySelector(".answer").innerHTML = `John's BMI ${BMIjohns} is higher than Mark's BMI ${BMImarks}`;
// }


//coding assignment - 2

// let dolphins = (96 + 108 + 89)/3;
// let koalas = (88+91+110)/3;
//
//
// if(dolphins > koalas && dolphins >= 100){
//   console.log(`Dolphins win with the avg score of ${dolphins}`);
// }else if(koalas > dolphins && koalas>=100){
//   console.log(`Koalas win with the avg score of ${koalas}`);
// }else{
//   console.log("Match End in Draw since either the score is equal or the avegage score of winning team is less than 100");
// }


//statement in a template literal using ternary operator

// let age = 16;
// console.log(`i like to drink ${age >= 18 ? "wine" : "water"}`);

//coding assignment - 3

// let amount = 275;
// let tip = (amount>=50 && amount<=300) ? 0.15 : 0.20;
// console.log(`The Bill is ${amount} and the Tip is ${tip*amount} and the total value to pay for is ${amount+tip*amount}`);

 // 'use strict';
 //  let hasDriversLicense = false;
 //  const passTest = true;
 //  if( passTest  === true )
 //    hasDriversLicense = true;
 //
 //  if(hasDriversLIcense) console.log("I Can Drive!");
 //
 //


 //Years left before Retirement


//  const retirement = (currentYear, birthYear,retirementAge) =>  retirementAge-(currentYear-birthYear);
// console.log(retirement(2021,1998,60));


//Assignment - 3
//
// const average = (score1,score2,score3) => (score1+score2+score3)/3;
// const averageForKoalas = average(65,54,49);
// const averageForDolphis = average(44,23,71);
//
//
// function checkWinner(avgKoalas,avgDolphins){
//   if(avgKoalas >= 2*avgDolphins){
//     return ("Koalas Are the Real Winners Today!");
//   }else if(avgDolphins >= 2*avgKoalas){
//     return ("Dolphins Are the Real Winners Today!");
//   }else{
//     return ("No Real Winners Today!");
//   }
// }
//
// console.log(checkWinner(averageForKoalas, averageForDolphis));


// JavaScript Objects

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schidmann',
//   job: 'Teacher',
//   birthYear: 1991,
//   hasDriverLicense: false,
//   friends:['Micheal','Peter','Steven'],
//
// //object method
//   getAge : function (){
//     return 2021 - this.birthYear;
//   },
//   getSummary: function(){
//     return `${this.firstName} is a ${this.job} who was born in ${this.birthYear} and ${this.hasDriverLicense ? "has a driver license" : "does not have a drivers license"}`;
//   }
// };
// alert(jonas.getSummary());
// console.log(jonas.friends);
// console.log(jonas['lastName']);
//usage of bracket Notation of accessing data in objects
// const interstedIn = prompt("Enter the Data You want to achieve for Jonas");
// if(jonas[interstedIn]){
//   alert(jonas[interstedIn]);
// }else alert("Wrong Request!");
//
// alert(`${jonas.firstName} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]}`);

//Assignment 4
// const person1 = {
//   name: 'john',
//   height: 1.75,
//   weight: 57,
//   BMI: function (){this.bmi =  this.weight / (this.height**2);}
// };
// const person2 = {
//   name: 'Adam',
//   height: 1.73,
//   weight: 60,
//   BMI: function (){this.bmi =  this.weight / (this.height**2);}
// };
//
//
// if(person1.BMI() > person2.BMI()){
//   alert(`Body Mass Index of ${person1.name} is ${person1.bmi} and that is higher than ${person2.name} whose BMI is ${person2.bmi}`);
// }else{
//   alert(`Body Mass Index of ${person2.name} is ${person2.bmi} and that is higher than ${person1.name} whose BMI is ${person1.bmi}`);
// }


// function calcAge( birthYear ){
//   const age = 2037 - birthYear;
//   console.log(firstName);
//   function printAge(){
//     const output = `you are ${age} born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();
//   return age;
// }
//
// const firstName = 'Jonas';
// calcAge(1991);
//
//
// calcAge(1998);

//
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian','Pizzeria','Vegetarian','Organic'],
//   starterMenu: ['Focaccia','Bruschetta','Garlic','Bread','Caprese Salad'],
// }
//
//
// const arr = [1,2,3];
// const newArr = ['a','b','c',...arr];
// console.log(newArr


//Destructuring nested Arrays//
// const [a,b,[c,d]] = [1,2,[3,4]];
// console.log(c);

//default values
const [e=1,f=1,g] = [,9,10];
console.log(e,f,g);

//Destructuring object

const restaurant = {
  name: "Indian Bistro",
  location: "Mira-Bhayander Road, Mira Road, Mumbai",
  categories: ['Indian','Italian','Pizzeria'],
  starterMenu:['SouthIndian','NorthIndian','Maharashtrian'],
  mainMenu:['Garlic','Salad','Pizza','Pasta'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
};
// const {name,openingHours} = restaurant;
// console.log(openingHours);
//
// const {name: newname, openingHours: hours} = restaurant;
// console.log(newname);

//Mutating variables
// let a = 111;
// let b = 999;
// const obj = {
//   a: 23,
//   b: 7,
//   c: 14
// };
// // ({a,b} = obj);
// // console.log(a,b);
// //
// // const {fri: {open, close}} = openingHours;
// // console.log(open,close);

const a = [5,6,7];
const arr = [...a,1,2,3];

console.log(arr);

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);


//Iterables are arrays,strings,maps, sets but not Arrays

const str = 'Jonas';
const letters = [...str,' ','s'];
console.log(letters);

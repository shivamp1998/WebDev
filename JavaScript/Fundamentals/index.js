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
// const [e=1,f=1,g] = [,9,10];
// console.log(e,f,g);

//Destructuring object
const openingHours = {
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
};
const properties = Object.keys(openingHours);
for (const item of properties) {
  console.log(item);
}
// const days = ['mon','tue','wed','thu','fri','sat'];
// for(const item of days){
//   console.log(openingHours[item]?.open && "YES");
// }
// const restaurant = {
//   name: "Indian Bistro",
//   location: "Mira-Bhayander Road, Mira Road, Mumbai",
//   categories: ['Indian','Italian','Pizzeria'],
//   starterMenu:['SouthIndian','NorthIndian','Maharashtrian'],
//   mainMenu:['Garlic','Salad','Pizza','Pasta'],
//   openingHours,
//   };
//   console.log(restaurant);
//   console.log(openingHours.fri?.open);

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

// const a = [5,6,7];
// const arr = [...a,1,2,3];
//
// console.log(arr);
//
// const newMenu = [...restaurant.mainMenu,'Gnocci'];
// console.log(newMenu);
//
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);


//Iterables are arrays,strings,maps, sets but not Arrays

// const str = 'Jonas';
// const letters = [...str,' ','s'];
// console.log(letters);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// for (const [no,score] of game.scored.entries() ){
//   console.log(`goal ${no + 1  } is scored by ${score}`);
// }
// let avg = 0;
// for (const data of Object.values(game.odds)){
//   avg +=  data;
// }
// console.log(avg/Object.values(game.odds).length);
// for(const odd of game.odds)


//
//
// const {players:[players1,players2]} = game;
// const [gk,...fieldplayers] = players1;
//
// const allplayers = [...players1,...players2];
//
// const playersFinal = [...players1,'Thiago','Coutinho','Persic'];
// const {odds:{team1,x:draw,team2}} = game;
//
// function printGoals (...player){
//   for(let i=0;i<player.length;i++){
//     if(game.scored.includes(player[i]))
//     console.log(`${player[i]} scored 1 goal`);
//     else console.log(`${player[i]} scored 0 goals`);
//   }
// }
//
// printGoals('Lewandowski','Neuer');
// console.log(team1,draw,team2);
//
// console.log(team1 > team2 && "Team 2 wins" || team1 < team2 && "Team 1 wins");


//for of loop

// let arr = ['shivam','priyam','sachin','sourav'];
// for (const item of arr) {
//   console.log(item);
// }
//
// for(const item of arr.entries()){
//   console.log(item);
// }
//basically it generates a new array of each element containing its index and the item item name
//using destructuring
//
// for(const [i,j] of arr.entries()){
//   console.log(i+1 +" no Item is: " + j);
// }

//
// const orderSet = new Set([1,2,3,3,4,5]);
// console.log(orderSet);
// console.log(orderSet.has(3));
// orderSet.add(6);
// console.log(orderSet);
// orderSet.delete(1);
// console.log(orderSet);
//
// for(const order of orderSet){
//   console.log(order);
// }
//
// const staff = ['watier','chef','waiter','manager','chef','waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// console.log(staffUnique.size)
// console.log(staff.length);
//
// const rest = new Map();
// rest.set('name','shivampandey');
// rest.set(1,'Delhi,India');
// rest.set(2,'Mumbai, India').set(true,'we are Open').set(false,'we are closed');
//
// console.log(rest.get('name'));
//
// const question = new Map([
//   ['what is your name', 'sarvesh'],
//   ['Is this your first time on github', 'Yes'],
//   [true,'I\'ll print this when I\'m in need'],
// ])
//
// console.log(question.get(true));
//
// for(const [key,value] of question ){
//   console.log(key,value);
// }

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
//
// const events = [...new Set(gameEvents.values())];
// console.log(events);
//
// console.log(`An event happened every ${90/gameEvents.size} minutes`);
// for( const [time,eve] of gameEvents ){
//   if( time <=45)
//   console.log(`[first Half] ${time} : ${eve}`);
//   else console.log(`[Second half] ${time} : ${eve}`);
// }
//
// gameEvents.delete(64);
// console.log(gameEvents);
// console.log(events);


const airline = 'TAP Air portugal';
const plane = "A320";
console.log(airline.length);
console.log(airline.indexOf('r'));
console.log(airline .lastIndexOf('A'));


console.log(airline.slice(4));
console.log(airline.slice(4,7));
console.log(airline[airline.indexOf('r')]);
console.log(airline.slice(airline.lastIndexOf('r')));


console.log(airline.slice(-1,0));


function checkMiddleSeat(seat) {
  if(seat[seat.length - 1] == 'B' || seat[seat.length - 1] == 'E')
  console.log("Yes its a Middle Seat");
  else console.log("Not a middle Seat");
}

const newseat = function(seat) {
  if(seat.slice(-1) == 'B' || seat.slice(-1) == 'E')
  console.log("Yes its a middle seat");
  else console.log("Not a middle seat");
}


newseat("21A");
checkMiddleSeat("22B");


console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const email = 'shivampandey98@gmail.com';
let testemail = "shivampandey98@Gmail.COM     ";

testemail = testemail.toLowerCase();
testemail = testemail.trim();

console.log(testemail);

if(email === testemail) {
  console.log("Yes both emails are same!");
}



const priceGB = "288,95$";


const annoucement = "All boarding passengers must come to boarding door 23, Boarding door 23";


console.log(annoucement.replaceAll('door','gate'));


console.log(annoucement.includes('boarding') ? "Yes it does" : "What the hell are you talking about?");
console.log(annoucement.startsWith("All"));
console.log(annoucement.endsWith("23"));


const checkBaggage = (items) => {
  if(items.includes('gun') || items.includes("pocket knife"))
    console.log("Person not allowed inside the plane");
  else console.log("Person is free to board the plane");
}
checkBaggage('I have a laptop, some foot and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


console.log('a+very+nice+string'.split('+'));

const [firstname,lastname] = 'shivam pandey'.split(" ");
console.log(firstname);
console.log(lastname);

const fullname = ['Mr',firstname, lastname.toUpperCase()].join(" ");
console.log(fullname);

const maskedCredit = function(number){
  const numString = String(number);
  let creditNumber = numString.slice(-4);
  console.log(creditNumber.padStart(numString.length,'*'));
}

maskedCredit(1234567890);

const message = 'This is going to repeat 10 times';
console.log(message.repeat(10));



var testCases = ['first_name','underscore_case','some_variable','calculate_age'];
var newArray = [];
const capatalizeFunction = function(testCases) {
  for(const test of testCases) {
    const [first,second] = test.split('_');
    newArray.push(first + second[0].toUpperCase() + second.slice(1,test.length));
  }
}
capatalizeFunction(testCases);
console.log(newArray);

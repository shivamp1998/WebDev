'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a','b','c','d','e'];
// console.log(arr.slice(2));
//splice
// console.log(arr.splice(2,1));
// console.log(arr);
// arr.reverse();
// console.log(arr)
// let arr2 = ['a','b','c'];
// let letters = arr2.concat(arr);
// console.log(letters);
// letters.forEach((data,index) => {
//   console.log(index,data)
// });

// for(const [index,letter] of letters.entries()) {
//   console.log(`${index} ${letter}`)
// }


// const currency = new Map([
//   ['India','Rupee'],   
//   ['Japan','Yen'],
//   ['USA','USD']
// ]);

// currency.forEach((value,key) => {
//   console.log(key,value)
// })

let dogs = [
  {
    weight: 22,
    curFood: 250,
    owners: ['Alice','Bob']
  },
  {
    weight: 8,
    curFood: 200,
    owners: ['Matilda']
  },
  {
    weight: 13,
    curFood: 275,
    owners: ['Sarah','John']
  },
  {
    weigth: 32,
    curFood: 340,
    owners: ['Micheal']
  }
]

dogs = dogs.map((value,index) => {
  return {
    ...value,
    recommendedFood: Number((value.weight ** 0.75) * 28)
  }
})
console.log(dogs)

dogs.map((value,index) => {
    if(value.owners.includes('Sarah')) {
      if(value.recommendedFood > value.curFood) {
        console.log('Eating Too little');
      }else{
        console.log('Eating too much');
      }
    }
})

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

dogs.map((value,index) => {
  if(value.recommendedFood < value.curFood){
    ownersEatTooMuch.push(value.owners);
  }else{
    ownersEatTooLittle.push(value.owners)
  }
})

console.log(ownersEatTooMuch.flat(),'-',ownersEatTooLittle.flat());

console.log(dogs.some((value) => value.curFood > value.recommendedFood * 0.09 && value.curFood < (value.recommendedFood * 1.10)))


const okayAmount = dogs.map((value,index) => {
  if( value.curFood > value.recommendedFood * 0.09 && value.curFood < (value.recommendedFood * 1.10)){
    return value.weight;
  }
})

console.log(okayAmount);
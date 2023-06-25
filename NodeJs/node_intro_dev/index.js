//IIFE
const IIFE = (function() {
    console.log('this function is going to be immediately invoked')
})();

// closures

const count = (function() {
    let _count = 0;
    return function() {return _count++; }
})();
for(let i=0; i<5; i++) {
 //   console.log(count());
}

const arr = ['a','b','c']

const ele = document.querySelector('.testing');
console.log(ele)    
for(char of arr) {
    const li = document.createElement('li');
    li.textContent = char;
    ele.appendChild(li);
}


const arrIter = arr[Symbol.iterator]()
console.log(arrIter.next())


const iterationFunction = (it) => {
    if(typeof it[Symbol.iterator] !== 'function') {
        return 'Not Iterable'
    }
    for(const letter of it) {
        console.log(letter);
    }
}

iterationFunction('abc');
iterationFunction(arr);
iterationFunction(123)//it is not iterable

const nArr = Array(1,2,4);
console.log(nArr.at(-1))

let arrayLike = {
    length: 2,
    0: 1,
    1: 2,
}
;
console.log(Array.prototype.at.call(arrayLike, -1)); // "b"
//array prototype returns undefined
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
arrayLike = { [Symbol.isConcatSpreadable]: true, length: 2, 0: 1, 1: 2 };
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]


//copy within
const array1 = ['a', 'b', 'c', 'd', 'e'];

console.log(array1.copyWithin(0, 3, 4));
console.log(array1.copyWithin(1, 3));
let target, start, end;
console.log(array1.copyWithin(target, start, end));

console.log([1,2,3,4,5].copyWithin(-2));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));


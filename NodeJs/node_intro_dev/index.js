

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

const arrayLike = {
    length: 2,
    0: 1,
    1: 2,
}
;
console.log(Array.prototype.at.call(arrayLike, -1)); // "b"

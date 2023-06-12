

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
    console.log(count());
}
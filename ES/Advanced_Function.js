/*
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyByFive = curriedMultiply(5);

console.log(multiplyByFive(1));
console.log(multiplyByFive(5));
console.log(multiplyByFive(10));
console.log(multiplyByFive(20));
*/


//Currying 0
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);

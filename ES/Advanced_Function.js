/*
console.log(multiplyByFive(5));
console.log(multiplyByFive(20));
*/


//Currying
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);


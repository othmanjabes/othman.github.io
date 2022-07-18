// //Advanced Arrays

// const double = []
// const newArray = array.forEach((num) => {
//     double.push(num * 2);
// })
//
// console.log(double);

//map
const array = [1,2,10,16];
const mapArray = array.map(num => num * 2);
console.log(mapArray);

//filter
const filterArray = array.filter(num => num > 5);
console.log(filterArray);

//raduce
const reduceArray = array.reduce((accumulator,num) => {return accumulator + num},0)
// 0 => value of accumulator
// try to change 0 to 6 // result is: 35
console.log(reduceArray)

const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}
/*
//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}
*/
// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  if(arr.length === 0){return 0};
  let biggest = -Infinity;
  for (const item of arr) { 
    if (item > biggest) {
      biggest = item;
    }
  }
  console.log(biggest);
}

function biggestNumberInArray2(arr) {

}

function biggestNumberInArray3(arr) {

}
biggestNumberInArray(array);
biggestNumberInArray(array2);
console.log(biggestNumberInArray(array3));



// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) { 
  let result = false;
  for (const key in lookingFor) {
    if (Object.hasOwnProperty.call(lookingFor, key)) {
      for (const basketItem of basket) {
        // console.log(basketItem, key);
        if (basketItem === key) {
          result = true;
        }
      }
    }
  }
  return result;
}

console.log("the result of Question #2 is: ",checkBasket(basket,amazonBasket));
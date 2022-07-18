# introduction
## CSS
### CSS Grid
[CSS Grid Generator](https://cssgrid-generator.netlify.app/)

- - - -
here I need to write most code of javascript
## Javascript types:
1. Number
2. String
	*  how to use variables on string
```javascript
const name = "othman";
const str = `hello ${name} how are you`;
```
	* 
4. Boolean
5. Undefined
6. Null
7. Symbol (new in ECMAScript 6)
8. Object

## Javascript comparisons:
* !== (not equal to)
* === (equal to)
* >= (greater than or equal to)
* <= (less than or equal to)
* > (less than)
* < (greater than)

## Javascript variables:
* var
* let (new in ECMAScript 6) : Used to declare variables that can be changed using code later on
* const (new in ECMAScript 6) : Used to declare constants that remain constant throughout the execution of the program, mostly used for functions and object

## Javascript logical operators:
* && = Sees if both values are the same/`true`.
* || = Sees if there is at least one of the same/ `true` value.
* ! = Turns `true` into `false`, and `false ` into `true`.
* 
## Javascript functions:
* var a = function name() {}
* function name() {}
```javascript
function add(a,b) {return a+b;}
```
* -return-
* () => (new in ECMAScript 6). 
```javascript
const add = (a,b) => a+b;
```
## Javascript data structures:
* Array
* Object

## Javascript looping:
* for
* while
* do
* forEach (new in ECMAScript 5)


### Javascript conditionals:
**if**
```javascript
if(condition) {
	//Code written here is executed if condition is true
}
```
**else**
```javascript
if(condition1) {
	//Code written here is executed if condition1 is true
} else {
	//Code written here is executed if condition is false
}
```
**else if**
```javascript
if(condition) {
	//Code written here is executed if condition1 is true
} else if(condition) {
	//Code written here is executed if condition2 is true
}
```
**switch**
```javascript
switch(expression){
	case result1:
		//code that runs if expression gives result1
		break;
	case result2:
		//code that runs if expression gives result2
		break;
	default:
		//code that runs if expression gives neither result1 nor result2
}
```

* break
* case
* catch
* class
* const
* continue
* debugger
* default
* delete
* do
* else
* export
* extends
* finally
* for
* function
	* short function syntax
``` javascript
const mapArray1 = array.map(function (num) {return num *2;})
const mapArray2 = array.map((num) => {return num*2});
const mapArray3 = array.map(num => num * 2);
```
* if
* import
* in
* instanceof
* new
* return
* super
* switch
* this
* throw
* try
* typeof
* var
* void
* while
* with
* yield
- - - -
now on advanced javascript

## Closures
[شرح ال Closures في جافا سكريبت.. ذكريات من الماضي – مدونة توتومينا](https://www.tutomena.com/javascript-closures)
```javascript
function createCounter() {
    let counter = 0;
    console.log('first',counter);
    function incrementCounter() {
      counter = counter + 1;
      console.log(counter);
      function chiuld() {
        //value is never read
      }
    }
    console.log('last',counter);
    return incrementCounter;
  }

  const increment = createCounter();
  increment(); // 1
  increment(); // 2
  increment(); // 3
```
**Console Output**
```
first 0
last 0
1
2
3
```



## Currying
How, & Why 
I’m #don’t_understand this lecture.
```javascript
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a*b;
const multiplyByFive = curriedMultiply(5);

console.log(multiplyByFive(1));
console.log(multiplyByFive(5));
console.log(multiplyByFive(10));
console.log(multiplyByFive(20));
```
**Output Console**
```
5
25
50
100
```

## Compose 
#don’t_understand 
```javascript
const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;

@Test & Output
compose(sum, sum)(0); //2
compose(sum, sum)(5); //7
compose(sum, sum)(8); //10
```



## Avoiding Side Effects, functional purity.
#don’t_understand 


## Arrays methods
### 1. map
تقوم بالمرور على كل القيم في المصفوفة مع إمكانية تعديل قيمتها.
الإختلاف بينها وبين `ForEach` ان تلك تقوم فقط بالمرور على المصفوفة 
أما `map`  تقوم بالمرور مع إمكانية التعديل
Ex: `[1,2,3,10]` =>  `[ 2, 4, 6, 20 ]`
``` javascript
//map
const array = [1,2,3,10];
const mapArray = array.map(num => num * 2);
console.log(mapArray);
```
**Console Output** => `[ 2, 4, 6, 20 ]`

### 2. filter
Ex: `[1,2,3,10]` => `[ 10, 16 ]`
``` javascript
const array = [1,2,10,16];
//filter
const filterArray = array.filter(num => num > 5);
console.log(filterArray);
```
**Console Output** => `[ 10, 16 ]`

### 3.reduce
Ex: `[1,2,3,10]` =>  `29`
``` javascript
//raduce
const reduceArray = array.reduce((accumulator,num) => {return accumulator + num},0)
// 0 => value of accumulator
// try to change 0 to 6 // result is: 35
console.log(reduceArray)
```
**Console Output** => `29`





















#JavaScript
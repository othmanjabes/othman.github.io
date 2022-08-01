// this is finel solving of first section 1/3
const arr = ['a', 'b', 'a', 'a','asd','asd','man','mfdsan','man'];
const newArr = [].concat(arr);
let finel = [];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i] === arr[j]){
            newArr.splice(i,1);
            count++;
        }
    }
    if(!finel.includes(arr[i]))
    {
        finel = finel.concat(arr[i]);
        finel = finel.concat(count);
    }
    count = 0;
}
console.log(finel);
console.log(arr);
// theis section 2/3
// need solving


function checkUppercase(str){
    for (var i=0; i<str.length; i++){
      if (str.charAt(i) == str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)){
        return true;
      }
    }
    return false;
};

// this has not Changed from Section 1/3
const arr = ['a','A','b','B','c','C','d','D','e','E'];
const newArr = [].concat(arr);
let finel = [];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i].toUpperCase() === arr[j].toUpperCase()){
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
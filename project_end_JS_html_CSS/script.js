function arrayAdd(start,deleteItem,item,newArray){
    newArray.splice(start,deleteItem,item)
    return newArray;
}

let txt = "A B C D";
let arr = txt.split(' ');
for (let i = 0; i < arr.length; i++) {
    let index = arr.indexOf(arr[i]); // save the index of elemnt
    let b = arr.findIndex(v => v === arr[i]) // save the index of elemnt
    if (arr[i] === index) {
        
    }
    console.log(index);

}

/*
let a = [5, 12, 8, 130, 44]
let b = a.findIndex(v => v > 13)
console.log(b) // 3
*/
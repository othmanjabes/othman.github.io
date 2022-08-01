const arr = ['a', 'b', 'a', 'a','asd','asd','man','man','man'];
let finel =[];
let count = 1;
let arrLength = arr.length;
let tempArray = [].concat(arr);
// hundle the value.
// remove all index by up value.
function counts() {
    let temp = arr[0];
    for (let i = 0; i < arrLength; i++) {
        if(arr[i] === temp){
            arr.splice(tempArray.indexOf(temp),1);
            count++;
        }
        finel = finel.concat(temp);
        finel = finel.concat(count);
    }
    return finel;
}

console.log('result is: ',counts());






/* 
function counts() {
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[0];
        // console.log(i,' ',temp);

        if(temp === undefined) break;
        
        for (let j = 0; j < tempArray.length; j++){
            if(temp === arr[j]){
                count++;
                arr.splice(tempArray.indexOf(temp),1);
            }
        }

        finel = finel.concat(temp);
        finel = finel.concat(count);
        count = 0;
    }
    
    return finel;
}
*/
/*----------------------------*/
// function counts() {
//     for (let i = 0; i < arrLength; i++) {
//         console.log(`for arr = ${arr}`);
//         let temp = arr[0];
//         for (const item in arr){
//             if (temp === arr[item]) {
//                 // console.log(`arr = ${arr}: tempArray = ${tempArray}`);
//                 count++;
//                 for (const key in arr) {
//                     console.log(`arr = ${arr}`);
//                     arr.splice(arr.indexOf(temp),1);
//                 }
//             }
//             console.log(`arr = ${arr}`);
//         }
//         finel = finel.concat(temp);
//         finel = finel.concat(count);
//         count = 0;
//     }
//     return finel;
// }
// console.log('result is: ',counts());
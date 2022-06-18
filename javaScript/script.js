var todos = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
];
var words = [
    "Hi",
    "bye",
];


// for (let i = 0; i < todos.length; i++) {
//     const e = todos[i];
//     console.log(e);
// }

todos.forEach(function(i, b){
    console.log(i, b);
})

// we create some function to do print of item
function LogFun(todos) {
    console.log(todos);
}

// here wo invokeing the function to print item from todos
todos.forEach(LogFun);
words.forEach(LogFun);


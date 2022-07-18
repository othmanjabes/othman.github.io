// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];
//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const _with = array.forEach((name) => {console.log(name.username+'!')});
console.log(_with);

//Create an array using map that has all the usernames with a "? to each of the usernames
const map = array.map((name) =>{ return name.username+"?"});
console.log(map);

//Filter the array to only include users who are on team: red
const _filter_Array = array.filter(name => name.team === "red");
console.log(_filter_Array);

//Find out the total score of all users using reduce
const _reduce_array = array.reduce((total, score) =>{return total+score.score},0);
console.log(`Total score: ${_reduce_array}`);


// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => num * 2);
console.log(`newArray: ${newArray}`);
//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
  user.items = user.items.map(item => {
    return item + "!"
  });
  return user;
})
console.log(answer);

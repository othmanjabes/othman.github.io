var btn = document.getElementById("enter"); //defined the button
var input = document.getElementById("userInput");//defined the input text box
var ul = document.querySelector("ul"); // dedined the ul list groups the li we need to add to them.

//return length of text on input user
function inputLength() {
    return input.value.length;
}

// added item to list
function createListElement(){
    //deined the li element
    var li = document.createElement("li");
    //create new node - now we need to return this node to something
    li.appendChild(document.createTextNode(input.value));
    console.log();
    //we added the new node to the ul group
    ul.appendChild(li);
    //remove the text we added from textbox
    input.value = "";
}

function addListAfterClick(){
    if (inputLength() > 0) {
        createListElement();
    }
}
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}
//added the item if Click to the button
btn.addEventListener("click",addListAfterClick);

// added the item if prees some Key we choose
// here we choose the "Enter" key have code 13
input.addEventListener("keypress",addListAfterKeypress)
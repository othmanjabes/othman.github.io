var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var grad = document.getElementById("grad");

getCurColor();
setGradient();

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);

function setGradient() {
    grad.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    getCurColor();
}

function getCurColor() {
    document.getElementById("curColor").innerHTML =
    "color 1: "+color1.value+`<br>`+"color 2: "+ color2.value;
}

function getRndInteger() {
    color1 =  Math.floor(Math.random() * (255 - 0));
  }
  
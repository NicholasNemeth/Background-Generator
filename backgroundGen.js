var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");

var color2 = document.querySelector(".color2");

var body = document.getElementById("gradient");


// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

// body.style.background = "red";



// color1.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

// color2.addEventListener("input", function(){
//     body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";;
// });

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
};


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

// this inputs the gradient into on page (aka window) loading
window.addEventListener("load", setGradient);

// you can do an oninput="setGradient()" specification as well in html. but that goes against seperation of concerns

// here is something new inside function above , adds to an element h3
// css.textContent = body.style.background +";";
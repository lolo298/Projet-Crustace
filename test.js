let divider = document.getElementById("divide");
let element = document.getElementById("card").querySelector("div");

console.log(divider.offsetWidth);
console.log(element.offsetWidth);

divider.style.width = element.offsetWidth - 8 + "px";

console.log(divider.offsetWidth);
console.log(element.offsetWidth);

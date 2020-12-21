//global variables
let input = document.querySelector("input");
let response = document.querySelector("h2");
let button = document.querySelector("button");
let result = document.getElementById("result")

//input is submited on enter
input.addEventListener("keydown", function(event) {
 if (event.keyCode === 13) { event.preventDefault(); button.click() }})

//input validation
function Input() {
 result.innerHTML = "";
 console.clear();
 console.log("input type is: " + typeof(input.value));
 try {
  if (input.value < 0) throw "Please enter a positive number";
  if (input.value == "") throw "Please enter a number";
  if (input.value == 0) throw "Please enter a number that is different from 0";
  if (input.value.includes(".")) throw "Please enter an integer"; }
 catch (error) { response.innerHTML = error; return false }
 response.innerHTML = "Prime factor decomposition for " + "<a style=color:#4dc3ff;text-decoration:none>" + input.value + "</a>" + ":";
 Calculation(); }

//calculates prime factor decomposition of a number
function Calculation() {
 let dividende = input.value;
 let diviseur = 2;
 let resultat;
 var text = "";
 while (dividende > 1) {
  while (dividende % diviseur == 0) {
   resultat = dividende / diviseur;
   dividende = resultat;
   text += "<br>" + diviseur;
   console.log(dividende + " / " + diviseur) }
  diviseur += 1; }
 result.innerHTML = text; }

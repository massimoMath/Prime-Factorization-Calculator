//JavaScript code
console.info("%cState: operative", "font-weight:bold;font-size:15px;color:#00ff00");

let input = document.querySelector("input");
let response = document.querySelector("h2");
let button = document.querySelector("button");
let show_result = document.getElementById("result");
let info = document.getElementById("info");

//Validate Input with enter
input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { event.preventDefault(); button.click() }
})

//Input Validation
function ValidateInput() {
  show_result.innerHTML = "";
  console.clear();
  console.info("%cState: operative", "font-weight:bold;font-size:15px;color:#00ff00");
  info.style.display = "none";
  try {
    if (input.value < 0) throw "Please enter a positive number";
    if (input.value == 1) throw "Please enter a number bigger than 1"
    if (input.value == "") throw "Please enter a number";
    if (input.value == 0) throw "Please enter a number that is different from 0";
    if (input.value.includes(".")) throw "Please enter an integer";
  } catch (error) {
    response.innerHTML = error;
    console.log("%cInput response: " + '"' + error + '"', "font-size:15px;color:red");
    return false
  }
  info.style.display = "inline";
  console.log("%cPrime factor decomposition for " + input.value + ":", "font-size:15px;color:#4dc3ff");
  console.time("The program went on for");
  Calculation();
}

//Function for Prime Factorization + console interface
function Calculation() {
  let dividend = input.value;
  let divisor = 2;
  let result;
  var text = "";
  let count_calculation = 0;
  let count_loop = -1;
  while (dividend > 1) {
    var exponent = 0;
    while (dividend % divisor == 0) {
      result = dividend / divisor;
      count_calculation++;
      console.log("%cCalculation " + "(" + count_calculation + ")" + ":", "color:coral;font-size:15px");
      console.log("%c " + dividend + " \u00f7 " + divisor, "font-size:14px");
      dividend = result;
      exponent += 1;
    }
    if (exponent >= 1) {
      text += "<br>" + divisor + "<sup style='color:#55dda4'>" + exponent + "</sup>"
    }
    divisor += 1;
    count_loop++;
  }

  console.log("%cCalculation finished", "font-size:15px;color:#4dc3ff");
  console.groupCollapsed("%cComplementary Information", "font-size:15px;color:#bd66ff;font-weight:bold");
  console.log("The divisor (initially set to 2) increased " + count_loop + " time(s).");
  console.timeEnd("The program went on for");
  console.groupEnd();
  
  localStorage.setItem(input.value, console.timeEnd("The program went on for"));

  if (divisor - 1 == input.value) {
    response.innerHTML = "<a style=color:#4dc3ff;text-decoration:none>" + input.value + "</a>" + " is a " + "prime number" + " !";
  } else {
    response.innerHTML = "Prime factor decomposition for " + "<a style=color:#4dc3ff;text-decoration:none>" + input.value + "</a>" + ":";
  }
  show_result.innerHTML = text;
  show_result.style.color = "#ff8f66";
}

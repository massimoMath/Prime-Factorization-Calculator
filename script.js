//JavaScript code (interface: default + console)
console.log("%cState: operative", "font-weight:bold;font-size:15px;color:green");

let input = document.querySelector("input");
let response = document.querySelector("h2");
let button = document.querySelector("button");
let show_result = document.getElementById("result");
let info = document.getElementById("info");


input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { event.preventDefault(); button.click() }
})


function Calculation() {
  show_result.innerHTML = "";
  console.clear();
  console.log("%cState: operative", "font-weight:bold;font-size:15px;color:#00ff00");
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
  console.info("%cPrime factor decomposition for " + input.value + ":", "font-size:15px;color:#4dc3ff");

  let dividend = input.value;
  let divisor = 2;
  let result;
  var text = "";
  let count_loop = 0;
  while (dividend > 1) {
    var exponent = 0;
    while (dividend % divisor == 0) {
      result = dividend / divisor;
      count_loop++;
      console.info("%cCalculation " + "(" + count_loop + ")" + ":", "color:coral; font-size:15px;");
      console.log("%c " + dividend + " \u00f7 " + divisor, "font-size:14px");
      dividend = result;
      exponent += 1;
    }
    if (exponent >= 1) {
      text += "<br>" + divisor + "<sup style='color:#55dda4'>" + exponent + "</sup>"
    }
    divisor += 1;
  }

  console.info("%cCalculation finished", "font-size:15px;color:#4dc3ff");
  setTimeout(function() {
    if (input.value == result) {
      response.innerHTML = input.value + " is a prime number";
    } else {
      response.innerHTML = "Prime factor decomposition for " + "<a style=color:#4dc3ff;text-decoration:none>" + input.value + "</a>" + ":";
    }
    show_result.innerHTML = text;
    show_result.style.color = "#ff8f66"
  }, 1000)
}

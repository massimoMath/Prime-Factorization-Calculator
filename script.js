console.log("%cState: operative", "font-weight:bold; color:#00ff00");

//JavaSript code
let input = document.querySelector("input");
let response = document.querySelector("h2");
let button = document.querySelector("button");
let show_result = document.getElementById("result");


input.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) { event.preventDefault(); button.click() }
})


function Calculation() {
  show_result.innerHTML = "";
  console.clear();
  console.log("%cState: operative", "font-weight:bold; color:#00ff00");
  try {
    if (input.value < 0) throw "Please enter a positive number";
    if (input.value == 1) throw "Please enter a number bigger than 1"
    if (input.value == "") throw "Please enter a number";
    if (input.value == 0) throw "Please enter a number that is different from 0";
    if (input.value.includes(".")) throw "Please enter an integer";
  } catch (error) {
    response.innerHTML = error;
    return false
  }

  response.innerHTML = "Prime factor decomposition for " + "<a style=color:#4dc3ff;text-decoration:none>" + input.value + "</a>" + ":";

  let dividend = input.value;
  let divisor = 2;
  let result;
  var text = "";
  while (dividend > 1) {
    count = 0;
    while (dividend % divisor == 0) {
      result = dividend / divisor;
      console.info("%c Calculation:", "font-weight:bold; color:coral");
      console.log(dividend + " / " + divisor);
      dividend = result;
      count += 1;
    }
    if (count >= 1) {
      text += "<br>" + divisor + "<sup style='color:#55dda4'>" + count + "</sup>"
    }
    divisor += 1;
  }
  console.info("%c  Calculation finished", "font-weight:bold; color:#4dc3ff");
  show_result.innerHTML = text;
  show_result.style.color = "#ff8f66"
}

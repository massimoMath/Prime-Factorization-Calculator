# Prime factorization calculator
link: https://helloworld-html.github.io/PrimeFactorDecomposition/

**This calculator allows you to calculate the prime factor decomposition of a positive integer.**

Below is the function that allows to calculate prime factorization (some comments were added to provide further explanation):

```
function Calculation() {

 let dividend = input.value; //fetches the number present in the input

 let divisor = 2; //first we set the divisor to 2
 
 let result; //this is the result when dividing the dividend by the divisor
 
 var text = "";
 
 while (dividend > 1) { //this operation goes on until dividend is bigger than 1
 
  while (dividend % divisor == 0) { //this loop goes on until the dividend modulus divisor is equal to 0
  
   resultat = dividend / divisor; //result
   
   dividend = result; //the dividend becomes the result
   
   text += "<br>" + divisor; } //shows the divisor
   
  divisor += 1; } //divisor + 1, if this condition is not valid => dividend % divisor == 0 
  
 document.getElementById("WhereYouWantToDisplayThis").innerHTML = text; } //displays this in the DOM
 ```

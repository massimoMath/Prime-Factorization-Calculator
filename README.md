# Prime factorization calculator
link: https://helloworld-html.github.io/Prime-Factorization-Calculator/

**This calculator allows you to calculate the prime factor decomposition of a positive integer.**

Below is the function that allows to calculate prime factorization:

```
function Calculation() {
   let dividend = input.value;
   let divisor = 2;
   let result;
   var text = "";
   while (dividend > 1) {
      while (dividend % divisor == 0) {
         resultat = dividend / divisor;
         dividend = result;
         text += "<br>" + divisor;
      }
      divisor += 1;
   }
   document.getElementById("WhereYouWantToDisplayThis").innerHTML = text;
}

 ```

const calc = document.getElementById("calc");
let results = document.getElementById("output");

calc.addEventListener("click", function () {

   let value1 = document.getElementById("value1").value;
   let value2 = document.getElementById("value2").value;
   const option = document.getElementById("option").value;
   const base = document.getElementById("base").value;

   switch (option) {
      case '+':
         results.innerHTML = `Results: ${addNumber(value1, value2, base)}`;
         break;
      case '-':
         results.innerHTML = `Results: ${subNumber(value1, value2, base)}`;
         break;
      case '/':
         results.innerHTML = `Results: ${divNumber(value1, value2, base)}`;
         break;
      case '*':
         results.innerHTML = `Results: ${multNumber(value1, value2, base)}`;
         break;
   }
});

function addNumber(num1, num2, base) {
   var binNum1 = parseInt(num1, base);
   var binNum2 = parseInt(num2, base);
   var addition = binNum1 + binNum2;
   return addition.toString(base);
};

function subNumber(num1, num2, base) {
   var binNum1 = parseInt(num1, base);
   var binNum2 = parseInt(num2, base);
   var addition = binNum1 - binNum2;
   return addition.toString(base);
};

function divNumber(num1, num2, base) {
   var binNum1 = parseInt(num1, base);
   var binNum2 = parseInt(num2, base);
   var addition = binNum1 / binNum2;
   return addition.toString(base);
};

function multNumber(num1, num2, base) {
   var binNum1 = parseInt(num1, base);
   var binNum2 = parseInt(num2, base);
   var addition = binNum1 * binNum2;
   return addition.toString(base);
};

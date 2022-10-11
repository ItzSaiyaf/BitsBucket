const calc = document.getElementById("calc");
let results = document.getElementById("output");

calc.addEventListener("click", function () {

   let value1 = document.getElementById("value1").value;
   let value2 = document.getElementById("value2").value;
   const option = document.getElementById("option").value;

   switch (option) {
      case '+':
         results.innerHTML = `Results: ${addBinary(value1, value2)}`;
         break;
      case '-':
         results.innerHTML = `Results: ${subBinary(value1, value2)}`;
         break;
      case '/':
         results.innerHTML = `Results: ${divBinary(value1, value2)}`;
         break;
      case '*':
         results.innerHTML = `Results: ${multBinary(value1, value2)}`;
         break;
   }
});

function addBinary(num1, num2) {
   var binNum1 = parseInt(num1, 2);
   var binNum2 = parseInt(num2, 2);
   var addition = binNum1 + binNum2;
   return addition.toString(2);
};

function subBinary(num1, num2) {
   var binNum1 = parseInt(num1, 2);
   var binNum2 = parseInt(num2, 2);
   var addition = binNum1 - binNum2;
   return addition.toString(2);
};

function divBinary(num1, num2) {
   var binNum1 = parseInt(num1, 2);
   var binNum2 = parseInt(num2, 2);
   var addition = binNum1 / binNum2;
   return addition.toString(2);
};

function multBinary(num1, num2) {
   var binNum1 = parseInt(num1, 2);
   var binNum2 = parseInt(num2, 2);
   var addition = binNum1 * binNum2;
   return addition.toString(2);
};


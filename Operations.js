function calculate(Num1, Num2, Operator){
  switch(Operator){
    case "+":
      return Num1 + Num2;
      break;
    case "-":
      return Num1 - Num2;
      break;
    case "*":
      return Num1 * Num2;
      break;
    case "/":
      return Num1 / Num2;
      
      break;
    case "%":
      return Num1 % Num2;
      break;
  }
}
  console.log(calculate(10, 5, "+"));
  console.log(calculate(10,5, "-"));
  console.log(calculate(10,5, "*"));
  console.log(calculate(10,5, "/"));
  console.log(calculate(10,3, "%"));
  
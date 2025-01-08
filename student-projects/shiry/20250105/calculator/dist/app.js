/*
1. Complete simple calculator
2. Add error handling to calculator - on error, show error message and don't continue the program
    * Validate that the user entered valid numbers
    * Validate that the user entered a valid operator
    * Validate that the user is not trying to divide by 0
*/
var firstNumber = prompt("enter the first number");
var SecondNumber = prompt("enter the second number");
var operator = prompt("enter an operator (+, -, *, / )");
var firstRealNumber = Number(firstNumber);
var SecondRealNumber = Number(SecondNumber);
if (!isNaN(firstRealNumber) && !isNaN(SecondRealNumber)) {
    if (operator === "+") {
        alert(firstRealNumber + SecondRealNumber);
    }
    else if (operator === "-") {
        alert(firstRealNumber - SecondRealNumber);
    }
    else if (operator === "*") {
        alert(firstRealNumber * SecondRealNumber);
    }
    else if (operator === "/" && SecondRealNumber !== 0) {
        alert(firstRealNumber / SecondRealNumber);
    }
    else {
        if (SecondRealNumber === 0) {
            alert("cant divide by zero");
        }
        else {
            alert("your operator is incorrenct");
        }
    }
}
else {
    alert("your nembers are not real numbers");
}

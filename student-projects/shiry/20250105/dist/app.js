var firstNumber = prompt("enter the first number");
var SecondNumber = prompt("enter the second number");
var operator = prompt("enter an operator (+, -, *, / )");
var firstRealNumber = Number(firstNumber);
var SecondRealNumber = Number(SecondNumber);
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

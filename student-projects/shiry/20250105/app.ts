const firstNumber =  prompt("enter the first number");
const SecondNumber =  prompt("enter the second number");
const operator =  prompt("enter an operator (+, -, *, / )");

const firstRealNumber : number = Number(firstNumber);
const SecondRealNumber : number = Number(SecondNumber);


if (operator=== "+")
{
    alert(firstRealNumber + SecondRealNumber);
}

else if (operator=== "-")
{
    alert(firstRealNumber-SecondRealNumber);
}
else if (operator=== "*")
{
    alert(firstRealNumber*SecondRealNumber);
}
else if (operator=== "/" && SecondRealNumber!==0)
{
    alert(firstRealNumber/SecondRealNumber);
}   

else 
{
    if(SecondRealNumber===0) {
        alert("cant divide by zero");
    }
    else {
        alert("your operator is incorrenct")
    }
    
}

// Fix avg so the user should click the "cancel" button to finish the input (update the prompt to reflect the change)
var Numbers = prompt("please enter a number (Click 'cancel' to finish input)");
var Allnumbers = 0;
var i = 0;
while (Numbers != null) {
    i++;
    Allnumbers += Number(Numbers);
    Numbers = prompt("please enter a number (Click 'cancel' to finish input)");
}
alert("your average for your " + i + " numbers is :  " + Allnumbers / i);

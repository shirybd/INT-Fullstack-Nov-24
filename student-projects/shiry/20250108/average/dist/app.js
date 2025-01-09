//const usernumber = prompt("choose 5 numbers");
var summarynum = 0;
var numberstoread = Number(prompt("how many numbers you want to input? "));
for (var i = 0; i < numberstoread; i++) {
    var mynumber = prompt("enter your number");
    summarynum += Number(mynumber);
}
alert("the average of your numbers is : " + (summarynum / numberstoread));

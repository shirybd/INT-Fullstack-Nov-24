//const usernumber = prompt("choose 5 numbers");
let summarynum:number=0;
const numberstoread = Number(prompt("how many numbers you want to input? "))



for(let i=0; i<numberstoread; i++)
{
    const mynumber = prompt("enter your number");
    summarynum += Number(mynumber);
}
alert("the average of your numbers is : " + (summarynum/numberstoread));
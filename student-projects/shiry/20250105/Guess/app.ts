/*
Create a guess my number game
    * The computer chooses a random number
    * The user enters a guess
    * The computer tells the user if their guess was right
    * Display proper error message when the input is not a valid number
    (Single guess)
*/
const randNumber : number = Math.floor(Math.random() * 10);
const UserNumber : number = Number(prompt("try to guess my number"));

if (!isNaN(UserNumber) )
{
    if(UserNumber===randNumber)
    {
        alert("you Got it !!!");
    }
    else
    {
        alert("No, that's not my number. my number was " + randNumber);
    }

}
else {
    alert("you didn't enter a number");
}
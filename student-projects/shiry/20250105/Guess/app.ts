/*
Create a guess my number game
    * The computer chooses a random number
    * The user enters a guess
    * The computer tells the user if their guess was right
    * Display proper error message when the input is not a valid number
    (Single guess)

    4. Improve our guess my number game
    * Allow the user 3 guesses
    * After each guess, if the user got it wrong, tell the user if his number was above or bellow the secret number
    * Stop the program on invalid input
*/
const randNumber: number = Math.floor(Math.random() * 10);
let UserNumber: number;
let index: number = 3;


while (index > 0) {
    UserNumber =  Number(prompt("try to guess my number. between 0 and 9"));
    if (!isNaN(UserNumber)) {
        if (UserNumber === randNumber) {
            alert("you Got it !!!");
            break;
        }
        else if (randNumber>UserNumber) {
            alert("No, that's not my number. Try a bigger number" );
        }
        else {
            alert("No, that's not my number. Try a smaller number" );
        }

    }

    else {
        alert("you didn't enter a number");
        break;
    }

    index--;
}
if (index === 0) {
    alert("My number was " + randNumber );
}

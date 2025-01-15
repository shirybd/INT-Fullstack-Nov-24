// 3. I have time for a full guess my number project!
//     * Add a main menu where the user can start a new game, change the settings, or quit
//     * After each play, return to the main menu
//     * If the user clicks "cancel" in the prompt, allow the user to give up (ask if the user wants to give up)
//     * Settings to modify:
//         * Difficulty - change the range the selected number can be chosen from (higher difficulty === wider range)
//         * Number of gueeses
//         * Play mode - classic (above/bellow) or hot/cold (remember the previous guess and say hot/cold if the current guess is closer/further from the secret number respectively)
//     * Validate all the inputs
//     * Handle "cancel"
var Difficulty = 10;
var gueeses = 5;
var gamemode = 1;
menu("main");
function menu(menuType) {
    var userChoince = (menuType === "main") ? Number(prompt("Hi, please choose : \n(1) start a new game \n(2) change the settings \n(3) quit")) : Number(prompt("please choose what would you like to set : \n(1) Difficulty \n(2) Number of gueeses \n(3) Play mode"));
    if (userChoince != 0) {
        if (menuType === "main") {
            switch (userChoince) {
                case 1:
                    //newGame();
                    break;
                case 2:
                    menu("settings");
                    break;
                case 3:
                    alert("see you later");
                    break;
                default:
                    menu(menuType);
                    break;
            }
        }
        else {
            switch (userChoince) {
                case 1:
                    Difficulty = Number(prompt("choose your difficulty (1-100)"));
                    break;
                case 2:
                    gueeses = Number(prompt("choose your Number of gueeses (1-100)"));
                    break;
                case 3:
                    gamemode = Number(prompt("choose your game mode : \n(1) classic \n(2) hot-cold "));
                    break;
                default:
                    menu(menuType);
                    break;
            }
        }
    }
    else {
        confirm("are you sure ? ") ? alert("see you later") : menu(menuType);
    }
}
function newGame(Difficulty, gueeses, gamemode) {
    var randomNum = Math.floor(Math.random() * Difficulty);
    var lastUserNumber = Infinity;
    for (var i = 0; i < gueeses; i++) {
        var UserNumber = Number(prompt("try to guess my number...."));
        if (!isNaN(UserNumber)) {
            checkUserNumber(randomNum, UserNumber, lastUserNumber, gamemode);
            lastUserNumber = UserNumber;
        }
        else {
            alert("My number was " + randNumber);
        }
    }
}
function checkUserNumber(randomNum, UserNumber, lastUserNumber, gamemode) {
    switch (gamemode) {
        case 1:
            if (randomNum < UserNumber)
                return ("your number is big ");
            else if (randomNum > UserNumber)
                return ("your number is bigger ");
            else
                return ("your got it ! ");
            break;
        case 2:
            var diff = Math.abs(randomNum - UserNumber);
            var lastdiff = Math.abs(randomNum - lastUserNumber);
            if (diff === 0)
                return ("your got it !  ");
            else if (lastdiff > diff)
                return ("hot ");
            else if (lastdiff < diff)
                return ("cold ");
            break;
    }
}
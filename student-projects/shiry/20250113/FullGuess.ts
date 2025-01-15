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

let Difficulty : number=10;
let gueeses :number=5;
let mode:string = "classic"

function menu ()
{
    const userChoince =prompt("Hi, please choose : \n(1) start a new game \n(2) change the settings \n(3) quit");
    if(userChoince!==null)
    {
        
        switch(userChoince)
        {
            case "1":
                //newGame();
                alert("1");
                break;
            case "2":
                //SettingsMenu()
                alert("2");
                break;
            case "3":
                alert("see you later");
                break;
            default:
                menu();
                break;
        }
    }
    else 
    {
        confirm("are you sure ? ") ?  alert("see you later") : menu();
    }
}

function settings ()




function newGame(Difficulty:number,gueeses:number,mode:string)
{
    const randomNum : number = Math.floor(Math.random()*Difficulty);


for(let i=0; i<gueeses;i++)
{
    const UserNumber :number = Number(prompt("try to guess my number...."));
    if (!isNaN(UserNumber)) {
        
    }
    else 
        {
        alert("My number was " + randNumber );
        }
}

}





menu();
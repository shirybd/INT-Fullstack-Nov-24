// Fix avg so the user should click the "cancel" button to finish the input (update the prompt to reflect the change)

let Numbers = prompt("please enter a number (Click 'cancel' to finish input)");
let Allnumbers : number= 0;
let i:number=0;

while (Numbers!=null)
{
    i++;
    Allnumbers +=  Number(Numbers);
    Numbers = prompt("please enter a number (Click 'cancel' to finish input)");
}

alert("your average for your " + i +  " numbers is :  " + Allnumbers/i);
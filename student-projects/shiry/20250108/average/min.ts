let nextNumber = prompt("please enter a number (write stop to finish input)");
let minimum : number= Infinity;

while (!(nextNumber==="stop"))
{
   
    
    if(Number(minimum)>Number(nextNumber))
    {
        minimum = Number(nextNumber);
    }
    
    nextNumber = prompt("please enter a number (write stop to finish input)");
}

alert(minimum);
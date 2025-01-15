


// * divide - Get 2 numbers, print their ratio (/) - handle division by 0
function div(mone : number, mechane : number) 
{
        alert (mechane!==0 ? mone/mechane : "cannot divide by zero !")
}

//alert (div(5,0) );

// * capitalize - Get a string, return the same string with the first character as a capital letter
function  capitaliz(userInput :string)    {
    return(userInput.slice(0,1).toUpperCase()+userInput.slice(1))
}

//alert capitaliz("dfkk")

// * superGreet - Get first name and last name, print a greeting with the names capitalized
function superGreet(FirstName : string,LastName : string)
{
    alert(capitaliz(FirstName) + " " + capitaliz(LastName));
}


// * greetFullname - Get the full name of the user, print a greeting with first name and last name capitalized
function greetFullname(fullName : string)
{
    const nameArray = fullName.split(" ")
    alert(capitaliz(nameArray[0]) + " " + capitaliz(nameArray[1]));
}

greetFullname("shiry bar")
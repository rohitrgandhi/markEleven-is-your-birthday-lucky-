//taking variables from HTML world to Javascript world
const dob=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const output=document.querySelector("#output");
const checkButton=document.querySelector("#button");

function check()
{
    let birthDate=dob.value;
    let sum=calculateSum(birthDate);

    
    if(sum && luckyNumber) // this checks whether both inputs are filled
    {
        if (sum%luckyNumber.value===0) //this is where it checks for luck
        {
            output.innerText="Your Birthday is lucky";
        }
        else
        {
            output.innerText= "You have to make your OWN luck";
        }
    }
    else output.innerText= "How to calculate luck without input?";
}
function calculateSum(birthDate) //returns addition of digits
{   
    
    birthDate=birthDate.replaceAll("-",""); //this removes dashes to make it a string of numbers

    
    let add=0;
    for(let i=0;i<birthDate.length;i++) // addition of numbers takes place here
    {
        add=add+Number(birthDate.charAt(i)); //birthDate is a string and cannot be added to add hence converted to a number using "Number()".
    }
    return add;
}

//when button is clicked "check" function is called.
checkButton.addEventListener("click", check);
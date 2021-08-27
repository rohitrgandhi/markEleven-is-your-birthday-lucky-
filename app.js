const dob=document.querySelector("#date-of-birth");

const luckyNumber=document.querySelector("#lucky-number");

const output=document.querySelector("#output");

const checkButton=document.querySelector("#button");

function check()
{
    const birthDate=dob.value;
    const sum=calculateSum(birthDate);
    lucky(sum);
}
function calculateSum(birthDate)
{   
    birthDate=birthDate.replaceAll("/","");
    const quotient=0;
    const remainder=0;
    const dateAdd=0;
    
    for(let i=0;i<birthDate.length;i++)
    {
        quotient=quotient/10;
        remainder=quotient%10;
        dateAdd= dateAdd+remainder;
    }
    return dateAdd;
}

checkButton.addEventListener("click", check);


function lucky(){
    if (dob.value%luckyNumber.value==0)
    {
        output.innerText="Birthday is lucky"
    }
    else{
     output.innerText="Sorry but your Birthday is not lucky"
    }
}

var dob=document.getElementById("date-of-birth");

var luckyNumber=document.getElementById("lucky-number");

var output=document.getElementById("output");

var checkButton=document.getElementById("button");

function check()
{
    let birthDate=dob.value;
    let sum=calculateSum(birthDate);
    lucky(sum);
}
function calculateSum(birthDate)
{   
    birthDate=birthDate.replaceAll("/","");
    let quotient=0;
    let remainder=0;
    let dateAdd=0;
    
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

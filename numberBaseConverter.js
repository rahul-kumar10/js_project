const inputFrom = document.querySelector("#baseFrom");
const inputTo = document.querySelector("#baseTo");
const inputNumber = document.querySelector("#inputNumber");

function swap(){
    let temp = document.querySelector("#baseFrom").value;
    document.querySelector("#baseFrom").value = document.querySelector("#baseTo").value;
    document.querySelector("#baseTo").value = temp;
    
}


function reverseNum(num){
    let x = "";
    for (let i=num.length-1; i>=0; i--)
    {
        x += num[i];
    }
    return x;
}
///const convertedChild = document.querySelector("#output");
function baseConvert(){
    let inputValue = inputNumber.value;
    let initialBase = Number(inputFrom.value);
    let finalBase = Number(inputTo.value);
    let inputReverseNum = reverseNum(inputValue);
    let decimalValue=0;
    for (let i=0; i<inputReverseNum.length; i++)
    {
        let digit = inputReverseNum[i];
        let regEx = "/ABCDEFGHIJKLMNOPQRSTUVWXYZ/";
        if (regEx.match(digit))
        {
            digit = regEx.indexOf(digit)+9;
        }
        decimalValue += digit*Math.pow(initialBase,i);
    }
    let convertedValue = "";
    while(decimalValue>0)
    {
        let temp = decimalValue % finalBase;
        let regEx = "/ABCDEFGHIJKLMNOPQRSTUVWXYZ/";
        if (temp>9)
        {
            temp = regEx[temp-9];
        }
        convertedValue += temp;
        decimalValue = Math.floor(decimalValue / finalBase)
    }
    let finalConvertedValue = (reverseNum(convertedValue));
    let convertedChild = document.querySelector("#output");
    let liTag = document.createElement("li");
    let spanTag = document.createElement("span");
    spanTag.innerHTML = `${finalConvertedValue}`;
    liTag.innerHTML = `From Base ${initialBase} to Base ${finalBase} is :- `;
    liTag.appendChild(spanTag);
    convertedChild.appendChild(liTag);
}
function reset(){
    //document.querySelector("#baseFrom").value = "";
    //document.querySelector("#baseTo").value = "";
    //document.querySelector("#inputNumber").value = "";
    //convertedChild.remove();
    location.reload();
}


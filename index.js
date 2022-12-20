const inputFrom = document.querySelector("#baseFrom");
const inputTo = document.querySelector("#baseTo");
const inputNumber = document.querySelector("#inputNumber");

function swap() {
    let temp = document.querySelector("#baseFrom").value;
    document.querySelector("#baseFrom").value = document.querySelector("#baseTo").value;
    document.querySelector("#baseTo").value = temp;
    document.querySelector("#inputNumber").value = finalConvertedValue;

}


function reverseNum(num) {
    let x = "";
    for (let i = num.length - 1; i >= 0; i--) {
        x += num[i];
    }
    return x;
}

function baseConvert() {
    let inputValue = inputNumber.value;
    let initialBase = Number(inputFrom.value);
    let finalBase = Number(inputTo.value);
    let inputReverseNum = reverseNum(inputValue);
    let decimalValue = 0;
    if(inputValue && initialBase && finalBase)
    {
        for (let i = 0; i < inputReverseNum.length; i++) {
            let digit = inputReverseNum[i];
            let regEx = "/ABCDEFGHIJKLMNOPQRSTUVWXYZ/";
            if (regEx.match(digit)) {
                digit = regEx.indexOf(digit) + 9;
            }
            decimalValue += digit * Math.pow(initialBase, i);
        }
        let convertedValue = "";
        while (decimalValue > 0) {
            let temp = decimalValue % finalBase;
            let regEx = "/ABCDEFGHIJKLMNOPQRSTUVWXYZ/";
            if (temp > 9) {
                temp = regEx[temp - 9];
            }
            convertedValue += temp;
            decimalValue = Math.floor(decimalValue / finalBase)
        }
        const finalConvertedValue = (reverseNum(convertedValue));
        let convertedChild = document.querySelector(".output");
        let liTag = document.createElement("li");
        let spanTag = document.createElement("span");
        spanTag.innerHTML = `${finalConvertedValue}`;
        liTag.innerHTML = `For The Number ${inputValue} From Base ${initialBase} to Base ${finalBase} is :- `;
        liTag.appendChild(spanTag);
        convertedChild.appendChild(liTag);
    }
    else
    {
        alert("Please Fill The Input Field First");
    }
    
}
function reset() {
    location.reload();
}

function minmax(value, min, max) 
{
    if(parseInt(value) < min || isNaN(parseInt(value)))
        return false; 
    else if(parseInt(value) > max) 
        return false; 
    else return value;
}


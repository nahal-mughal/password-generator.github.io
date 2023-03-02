//data sets
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "/*-+!@'#~^$()";
//selectors
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("uppercase")
const lowerInput = document.getElementById("lowercase")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")


const randomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const randomPassword = (password = "") => {
    if (upperInput.checked) {
        password += randomData(upperSet)
    }
    if (lowerInput.checked) {
        password += randomData(lowerSet)
    }
    if (numberInput.checked) {
        password += randomData(numberSet)
    }
    if (symbolInput.checked) {
        password += randomData(symbolSet)
    }
    if (password.length < totalChar.value) {
        return randomPassword(password)
    }

    passBox.innerText = truncateString(password, totalChar.value)
}

randomPassword();

//function call
document.getElementById("btn").addEventListener(
    "click",
    function () {
        randomPassword();
    }
)

//truncate functio
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
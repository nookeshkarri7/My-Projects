let firstNum = document.getElementById("firstNumber")
let secondNum = document.getElementById("secondNumber")
let userinput = document.getElementById("userInput")
let gameresult = document.getElementById("gameResult")
firstranNumber = Math.ceil(Math.random() * 100)
seconranNumber = Math.ceil(Math.random() * 100)
firstNum.textContent = firstranNumber
secondNum.textContent = seconranNumber

function checkinput() {
    let userinputvalue = userInput.value
    let sumoftwonumbers = firstranNumber + seconranNumber
    //console.log(sumoftwonumbers)
    if (sumoftwonumbers == userinputvalue) {
        gameresult.textContent = "Congratulations! you got it right"
        gameresult.style.backgroundColor = "green";
        gameresult.style.fontSize = "20px"
    } else {
        gameresult.textContent = "Please Try Again!"
        gameresult.style.backgroundColor = "blue";
        gameresult.style.fontSize = "20px"
    }
}

function restartgame() {
    firstranNumber = Math.ceil(Math.random() * 100)
    seconranNumber = Math.ceil(Math.random() * 100)
    firstNum.textContent = firstranNumber
    secondNum.textContent = seconranNumber
}
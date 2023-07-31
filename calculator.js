let firstNum;
let secondNum;
let operator;
let displayValue = 0;

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(firstNum, operator, secondNum) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    if (operator === "+") {
        return add(firstNum, secondNum);
    } else if (operator === "-") {
        return subtract(firstNum, secondNum);
    } else if (operator === "x") {
        return multiply(firstNum, secondNum);
    } else if (operator === "÷") {
        return divide(firstNum, secondNum);
    }
}

function updateDisplay() {
    document.querySelector(".calc-display").innerText = displayValue;
}

updateDisplay();
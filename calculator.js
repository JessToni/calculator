let firstNum;
let secondNum;
let operator;

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
        add(firstNum, secondNum);
    } else if (operator === "-") {
        subtract(firstNum, secondNum);
    } else if (operator === "x") {
        multiply(firstNum, secondNum);
    } else if (operator === "÷") {
        divide(firstNum, secondNum);
    }
}
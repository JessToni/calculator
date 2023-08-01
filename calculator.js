let firstNum;
let secondNum;
let operator;
let displayValue = '0';

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

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }

    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function storeValue(displayValue) {
    firstNum = displayValue;
}

function storeOperator(symbol) {
    operator = symbol;
}

function storeSecondValue(displayValue,operator) {
    let splitString = displayValue.split(operator);
    secondNum = splitString;
}

//Event listener for all of the buttons in the calculator
document.querySelector('.btn-container').addEventListener('click', function(event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        const buttonValue = target.innerText;
        if(buttonValue === 'C') {
            clearDisplay();
        } else if (buttonValue === '+'|| buttonValue === '-' || buttonValue === 'x' || buttonValue === '÷') {
            storeValue(displayValue);
            storeOperator(buttonValue);
            appendToDisplay(buttonValue)
        } else if (buttonValue === '=') {
            storeSecondValue(displayValue,operator);
        }else {
            appendToDisplay(buttonValue);
        }
        updateDisplay();
    }
});

/*document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('zero').addEventListener('click', () => appendToDisplay('0'));
document.getElementById('one').addEventListener('click', () => appendToDisplay('1'));
document.getElementById('two').addEventListener('click', () => appendToDisplay('2'));
document.getElementById('three').addEventListener('click', () => appendToDisplay('3'));
document.getElementById('four').addEventListener('click', () => appendToDisplay('4'));
document.getElementById('five').addEventListener('click', () => appendToDisplay('5'));
document.getElementById('six').addEventListener('click', () => appendToDisplay('6'));
document.getElementById('seven').addEventListener('click', () => appendToDisplay('7'));
document.getElementById('eight').addEventListener('click', () => appendToDisplay('8'));
document.getElementById('nine').addEventListener('click', () => appendToDisplay('9'));*/

//Initializes the display for user inputs
updateDisplay();
let operator = '';
let currentValue = '';
let previousValue = '';

document.addEventListener("DOMContentLoaded", function () {
    //Store all HTML components into JS.
    let clear = document.querySelector("#clear-button");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e) {
        handleNumber(e.target.textContent);
        currentScreen.textContent = currentValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e) {
        handleOperator(e.target.textContent);
        previousScreen.textContent = previousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))
    
    clear.addEventListener("click", function() {
        previousValue = '';
        currentValue = '';
        operator = '';
        previousScreen.textContent = currentValue;
        currentScreen.textContent = currentValue;
    })

    equal.addEventListener("click", function() {
        calculate();
    })
})

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }
}

function handleOperator(opr) {
    operator = opr;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = parseFloat(previousValue);
    currentValue  = parseFloat(currentValue);
    if (operator === '+') {
        add(previousValue, currentValue);
    } else if (operator === '-' ) {
        subtract(previousValue, currentValue);
    } else if () {

    } else if () {

    }

    console.log(previousValue)
}

function add(a,b) {
    previousValue += currentValue;
}
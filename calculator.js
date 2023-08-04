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

    operators.forEach((operator) => operator.addEventListener('click', function(e) {
        handleOperator(e.target.textContent);
    }))
})

function handleNumber(num) {
    if (currentValue.length <= 5) {
        currentValue += num;
    }
}

function handleOperator(opr) {
    console.log(opr);
}
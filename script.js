let displayValue = '';
let num1 = '';
let num2 = '';
let operator = '';

const displayDiv = document.querySelector("div.screen");
const digitInput = document.querySelectorAll("input.digit");
const operatorInput = document.querySelectorAll("input.operator");
const clearButton = document.querySelector("input#clear");
const equalButton = document.querySelector("input#equal");

digitInput.forEach((element) => {element.addEventListener("click", () => addNumber(element.value))});
operatorInput.forEach((element) => {element.addEventListener("click", () => setOperator(element.id))});
clearButton.addEventListener("click", clear);
equalButton.addEventListener("click", () => {
    if (num1 != '' && displayValue != '') {
        num2 = displayValue;
        displayValue = operate(operator, num1, num2);
        updateDisplay();
    }
})

function setOperator(id) {
    if (displayValue != '') {
        operator = id;
        num1 = displayValue;
        displayValue = '';
    } 
}

function updateDisplay() {
    displayDiv.textContent = displayValue;
}

function addNumber(e) {
    displayValue += e;
    updateDisplay();
}

function clear() {
    displayValue = '';
    updateDisplay();
}

function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function substract(num1, num2) {
    return Number(num1) - Number(num2)
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2)
}

function divide(num1, num2) {
    return Number(num1) / Number(num2)
}

function operate(operator, num1, num2) {
    switch (operator) {
        case 'add':
            return add(num1, num2);
        case 'substract':
            return substract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            break;
    }
}
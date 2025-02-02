// API - Application Programmable Interface
export function operate(operator) {
    calculate();
    display = storedOperation ? memory : display;
    storedOperation = operator;
    userInput = 0;
}
export function equals() {
    calculate();
    display = memory;
    storedOperation = undefined;
    userInput = 0;
}
export function clear() { }
export function allClear() { }
export function enterDigit(digit) {
    userInput *= 10;
    userInput += digit;
    display = userInput;
}
export function getDisplayValue() {
    return display;
}
function calculate() {
    switch (storedOperation) {
        case "+":
            memory += userInput;
            break;
        case "-":
            memory -= userInput;
            break;
        case "*":
            memory *= userInput;
            break;
        case "/":
            memory /= userInput;
            break;
        default:
            memory = userInput;
            break;
    }
}
let storedOperation = undefined;
let display = 0;
let userInput = 0;
let memory = 0;
export function debug() {
    console.log(`display: ${display}
userInput: ${userInput}
memory: ${memory}
storedOperation: ${storedOperation}`);
}

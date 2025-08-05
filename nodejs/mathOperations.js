function addNumbers(a, b) {
    return a + b;
}
function subtractNumbers(a, b) {
    return a - b;
}
function multiplyNumbers(a, b) {
    return a * b;
}
function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}
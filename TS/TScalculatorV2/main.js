var firstNumber = 0;
var secondNumber = 0;
var operator = '';
function onNumberClick(value) {
    var resultInput = document.getElementById('result');
    var currentValue = resultInput.value;
    resultInput.value = currentValue + value;
}
function onOperatorClick(value) {
    var resultInput = document.getElementById('result');
    firstNumber = parseFloat(resultInput.value);
    resultInput.value = '';
    operator = value;
}
function onClearClick() {
    var resultInput = document.getElementById('result');
    resultInput.value = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
}
function onCalculateClick() {
    var resultInput = document.getElementById('result');
    secondNumber = parseFloat(resultInput.value);
    var result = 0;
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            break;
    }
    resultInput.value = result.toString();
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
}

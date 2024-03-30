let firstNumber = 0;
let secondNumber = 0;
let operator = '';

function onNumberClick(value: string) {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    const currentValue = resultInput.value;
    resultInput.value = currentValue + value;
}

function onOperatorClick(value: string) {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    firstNumber = parseFloat(resultInput.value);
    resultInput.value = '';
    operator = value;
}

function onClearClick() {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    resultInput.value = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
}
function onCalculateClick() {
    const resultInput = document.getElementById('result') as HTMLInputElement;
    secondNumber = parseFloat(resultInput.value);
    let result = 0;
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
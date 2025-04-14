const display    =  document.querySelector('.calculator-input')
const keys       =  document.querySelector('.calculator-keys')

let displayValue          = '0'
let firstValue            = null
let operator              = null;
let waitingForSecondValue = false

updateDisplay()

function updateDisplay() {
    display.value = displayValue
}

keys.addEventListener('click',function(e){
    const element = e.target
    if(!element.matches('button')) return;
    switch(element.value) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":    
            handleOperator(element.value)
            break;
        case '.':
            inputDecimal(element.value)
            break;
        case 'clear':
            inputClear()
            break;
        default:
            inputNumber(element.value);
    }
    updateDisplay()

})

function inputNumber(num) {
    if(waitingForSecondValue) {
        displayValue = num;
        waitingForSecondValue = false
    } else {
        displayValue = displayValue === '0' ?  num : displayValue + num;
    }
   
}

function inputDecimal(){
    if(!displayValue.includes('.')) {
        displayValue += '.'
    }
}

function inputClear(){
    displayValue          = '0'
    firstValue            = null
    operator              = null;
    waitingForSecondValue = false
}

function calculate(first, second, oprtr) {
    if(oprtr === '+') {
        return first + second
    } else if(oprtr === '-') {
        return first - second 
    }else if(oprtr === '*') {
        return first * second
    } else if(oprtr === '/') {
        return first / second
    }
    return second;
}

function handleOperator(oprtr){
        const value = parseFloat(displayValue);
        if(oprtr && waitingForSecondValue) {
            operator = oprtr;
            return
        }
        if(firstValue === null) {
            firstValue = value
        } else if(oprtr) {
            const result = calculate(firstValue, value, operator);
            displayValue = parseFloat(result.toFixed(7))
            firstValue   = result
        }
        waitingForSecondValue = true
        operator = oprtr
}
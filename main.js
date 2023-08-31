const calcInfo = {
    displayNum: '',
    firstNum: '',
    operator: '',
    secondNum: ''
}
const display = document.querySelector('.display');

function add (calcInfo){    //unary plus operator converts string to numbers
    return +calcInfo.firstNum + +calcInfo.secondNum; 
}

function subtract (calcInfo){
    return +calcInfo.firstNum - +calcInfo.secondNum;
}

function divide (calcInfo){
    return (+calcInfo.firstNum / +calcInfo.secondNum).toFixed(3);
}

function multiply (calcInfo){
    return +calcInfo.firstNum * +calcInfo.secondNum;
}

function operate(calcInfo){
    switch (calcInfo.operator){
        case 'add':
            return add(calcInfo);
            break;
        case 'subtract':
            return subtract(calcInfo);
            break;
        case 'divide':
            return divide(calcInfo);
            break;
        case 'multiply':
            return multiply(calcInfo);
            break;
        case 'percent':

            break;
    }
}

function numberPress() {
    calcInfo.displayNum += this.textContent;
    display.textContent = calcInfo.displayNum;
}

function operatorPress() {
    if(calcInfo.operator === '') {
        calcInfo.operator = this.textContent;
        
    }
}

(()=> {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => number.addEventListener('click', numberPress))

    const operators = document.querySelectorAll('.operators');
    operators.forEach(operator => operator.addEventListener('click', operatorPress))
})();
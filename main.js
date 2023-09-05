const calcInfo = {
    storedNum: '',
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
        case '+':
            return add(calcInfo);
            break;
        case '-':
            return subtract(calcInfo);
            break;
        case '/':
            return divide(calcInfo);
            break;
        case '*':
            return multiply(calcInfo);
            break;
    }
}

function numberPress() {
    display.textContent += this.textContent;
    calcInfo.storedNum += this.textContent;
}

function semiClear() {
    calcInfo.operator = '';
    calcInfo.secondNum = '';
}

function operatorPress() {
    if(calcInfo.operator === '' && calcInfo.firstNum === '') {
        calcInfo.firstNum = calcInfo.storedNum;
        calcInfo.operator = this.textContent;
        display.textContent += calcInfo.operator;
        calcInfo.storedNum = '';

    }    
    else if (calcInfo.operator != '' && calcInfo.secondNum === '' && calcInfo.storedNum === ''){
        calcInfo.operator = this.textContent;
        display.textContent = display.textContent.slice(0,-1) + calcInfo.operator; //will remove the previous operation on this display and add the new one.
    }
    else if (calcInfo.operator != '' && calcInfo.storedNum != '') {
        calcInfo.secondNum = calcInfo.storedNum;
        calcInfo.firstNum = operate(calcInfo);
        semiClear();
        calcInfo.storedNum = ''
        calcInfo.operator = this.textContent;
        display.textContent += calcInfo.operator;
        console.log(calcInfo.firstNum);
    }
    
}

(()=> {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => number.addEventListener('click', numberPress))

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.addEventListener('click', operatorPress))
})();
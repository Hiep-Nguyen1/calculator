const calcInfo = {
    storedNum: '',
    firstNum: '',
    operator: '',
    secondNum: ''
}
const display = document.querySelector('.display');

function add (a,b){    //unary plus operator converts string to numbers
    return +a + +b; 
}

function subtract (a,b){
    return +a - +b;
}

function divide (a,b){
    return (+a / +b).toFixed(3);
}

function multiply (a,b){
    return +a * +b;
}

function operate(operator){
    calcInfo.secondNum = calcInfo.storedNum;
    calcInfo.storedNum = '';
    switch (operator){
        case '+':
            calcInfo.firstNum = add(calcInfo.firstNum,calcInfo.secondNum);
            break;
        case '-':
            calcInfo.firstNum = subtract(calcInfo.firstNum,calcInfo.secondNum);
            break;
        case '/':
            calcInfo.firstNum = divide(calcInfo.firstNum,calcInfo.secondNum);
            break;
        case '*':
            calcInfo.firstNum = multiply(calcInfo.firstNum,calcInfo.secondNum);
            break;
        default:
            alert("Error in calculation statement.");
            
            return;
    }
    semiClear();
    console.log(calcInfo.firstNum);
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
    if(this.textContent === '='){
        operate(calcInfo.operator);
        display.textContent = calcInfo.firstNum;
    }
    else if(calcInfo.operator === '' && calcInfo.firstNum === '') {
        calcInfo.firstNum = calcInfo.storedNum;
        calcInfo.operator = this.textContent;
        display.textContent += calcInfo.operator;
        calcInfo.storedNum = '';

    }        
    else if(calcInfo.operator === '' && calcInfo.firstNum != ''){
        calcInfo.operator = this.textContent;
        display.textContent += calcInfo.operator;
    } 
    else if (calcInfo.operator != '' && calcInfo.secondNum === '' && calcInfo.storedNum === ''){
        calcInfo.operator = this.textContent;
        display.textContent = display.textContent.slice(0,-1) + calcInfo.operator; //will remove the previous operation on this display and add the new one.
    }
    else if (calcInfo.operator != '' && calcInfo.storedNum != '') { //will calculate previous statement and assign current operator
        operate(calcInfo.operator);
        calcInfo.operator = this.textContent;
        console.log(calcInfo.operator);
        display.textContent += calcInfo.operator;
    }
    
}

(()=> {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => number.addEventListener('click', numberPress));

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.addEventListener('click', operatorPress));
})();
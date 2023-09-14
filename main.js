const calcInfo = {
    storedNum: '',
    firstNum: null,
    operator: '',
    secondNum: null
}
const display = document.querySelector('.display');

function add (a,b){
    return a + b; 
}

function subtract (a,b){
    return a - b;
}

function divide (a,b){
    if (a%b != 0){
        return parseFloat(a/b).toFixed(2);
    }
    else {
        return (a/b);
    }
    
}

function multiply (a,b){
    return a * b;
}

function operate(operator){
    calcInfo.secondNum = parseInt(calcInfo.storedNum);
    calcInfo.storedNum = '';
    console.log(calcInfo.firstNum + calcInfo.operator + calcInfo.secondNum);
    switch (operator){
        case '+':
            calcInfo.firstNum = add(calcInfo.firstNum,calcInfo.secondNum);
            break;
        case '-':
            calcInfo.firstNum = subtract(calcInfo.firstNum,calcInfo.secondNum);
            break;
        case '/':
            if (calcInfo.secondNum === 0){ //Checks for division by 0
                alert("Silly you, you can't divide by zero.");
                display.textContent = display.textContent.slice(0,-1); //removes 0 from display
                calcInfo.secondNum = null;
                return;
            }
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
    calcInfo.secondNum = null;
}

function operatorPress() {
    if(this.textContent === '='){ //if = is clicked, calculates and resets display screen to resulting num.
        operate(calcInfo.operator);
        display.textContent = calcInfo.firstNum;
    }
    else if(calcInfo.operator === '' && calcInfo.firstNum === null) { //stores value of first num and operator.
        console.log(calcInfo.firstNum + calcInfo.operator + calcInfo.secondNum);
        calcInfo.firstNum = parseInt(calcInfo.storedNum);
        calcInfo.operator = this.textContent;
        display.textContent += calcInfo.operator;
        calcInfo.storedNum = '';
        console.log(calcInfo.firstNum + calcInfo.operator + calcInfo.secondNum);

    }        
    else if(calcInfo.operator === '' && calcInfo.firstNum != null){ //use case for after = button is clicked, stores value of first num and operator.
        calcInfo.firstNum = parseInt(calcInfo.firstNum + calcInfo.storedNum);
        calcInfo.operator = this.textContent;
        display.textContent += calcInfo.operator;
        calcInfo.storedNum = '';
    } 
    else if (calcInfo.operator != '' && calcInfo.secondNum === null && calcInfo.storedNum === ''){ //will remove the previous operation on this display and add the new one.
        console.log(calcInfo.firstNum + calcInfo.operator + calcInfo.secondNum);
        calcInfo.operator = this.textContent;
        display.textContent = display.textContent.slice(0,-1) + calcInfo.operator; 
    }
    else if (calcInfo.operator != '' && calcInfo.storedNum != '') { //will calculate previous statement and assign current operator, allowing user to continue string of operations.
        operate(calcInfo.operator);
        calcInfo.operator = this.textContent;
        display.textContent += calcInfo.operator;
    }
    
}

(()=> {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => number.addEventListener('click', numberPress));

    const operators = document.querySelectorAll('.operator');
    operators.forEach(operator => operator.addEventListener('click', operatorPress));
})();
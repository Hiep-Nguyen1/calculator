function createButtons () {
    let buttons = document.querySelector(".buttons");
    for(let i = 0; i < 16; i++){
        const button = document.createElement('button');
        button.style.cssText = 'background-color: grey'
        buttons.appendChild(button);
    }
}

const calcInfo = {
    currentNum: null,
    operator: null,
    secondNum: null
}

function add (calcInfo){
    return calcInfo.currentNum + calcInfo.secondNum;
}

function subtract (calcInfo){
    return calcInfo.currentNum - calcInfo.secondNum;
}

function divide (calcInfo){
    return (calcInfo.currentNum / calcInfo.secondNum).toFixed(3);
}

function multiply (calcInfo){
    return calcInfo.currentNum * calcInfo.secondNum;
}

function operator(calcInfo){
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

createButtons();

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
    return calcInfo.currentNum + calcInfo.secondNum;
}

function divide (calcInfo){
    return calcInfo.currentNum / calcInfo.secondNum;
}

function multiply (calcInfo){
    return calcInfo.currentNum * calcInfo.secondNum;
}

createButtons();
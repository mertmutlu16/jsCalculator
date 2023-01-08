const button = document.querySelector('#buttons');
const screen = document.querySelector('.result');


let displayValue ='0';
let firstValue=null;
let operator= null;
let waitingSecondNumber=false;

updateDisplay();

button.addEventListener('click' , e=>{
    const element = e.target;
    if(!element.matches("button"))return;

    if(element.classList.contains('operator')){
        console.log(element.value)
        inputOperator(element.value);
        updateDisplay();
        return;
    }
    if(element.classList.contains('hello')){
        
        inputHi(element.value);
        updateDisplay();
    }
    if(element.classList.contains('decimal')){
        console.log(element.value)
        inputDecimal();
        updateDisplay();
        return;
    }
    if(element.classList.contains('clear')){
        console.log(element.value)
        clear();
        updateDisplay();
        return;
    }



    inputNumber(element.value);
    updateDisplay();

})
function inputHi(msg)
{
    
    displayValue = msg;
}

function inputOperator(operatorElement){
    const value = parseFloat(displayValue);

    
    if(operator && waitingSecondNumber) {
        operator = operatorElement;
        return;
    }

    if(firstValue == null){
        firstValue=value;
    }else if(operator){
        const result= calculate(firstValue , value , operator);

        displayValue= result;
        firstValue=result;

    }
    operator=operatorElement;
    waitingSecondNumber=true;
}

function calculate(first, second , operator){
    if(operator === '+'){
        return first + second;
    }else if(operator === '-'){
        return first - second;
    }else if(operator === '*'){
        return first * second;
    }else if(operator === '/'){
        return first / second;
    }
    return second;

}   


function updateDisplay(){
    screen.value= displayValue;
}

function inputNumber(num){
    if(waitingSecondNumber){
        displayValue=num;
        waitingSecondNumber = false ;
    }else {
        displayValue = displayValue === '0' ? num : displayValue+num;
    }
}

function inputDecimal(){
    if(!displayValue.includes('.')) displayValue+='.';  
    
    
}

function clear(){
    displayValue = '0';
}


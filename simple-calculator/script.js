let prevValue = null;
let lastValue = null;
let prevOp = null;
let lastOp = null;
let lastPerform  = 0; // 0 - number, 1 - operation
let decimal = 0; // 0 - no decimal, 1 - decimal
let decValue = 0;

let total = 0;

document.getElementById("button-C").addEventListener("click", buttonClear); // 0
document.getElementById("button-plusminus").addEventListener("click", function(){
    plusMinus();
}); // 1
document.getElementById("button-percent").addEventListener("click", function(){
    operate(2);
}); // 2
document.getElementById("button-div").addEventListener("click", function(){
    operate(3);
}); // 3
document.getElementById("button-7").addEventListener("click", function(){
    addNumber(7);
}); // 4
document.getElementById("button-8").addEventListener("click", function(){
    addNumber(8);
}); // 5
document.getElementById("button-9").addEventListener("click", function(){
    addNumber(9);
}); // 6
document.getElementById("button-mult").addEventListener("click", function(){
    operate(7);
}); // 7
document.getElementById("button-4").addEventListener("click", function(){
    addNumber(4);
}); // 8
document.getElementById("button-5").addEventListener("click", function(){
    addNumber(5);
}); // 9
document.getElementById("button-6").addEventListener("click", function(){
    addNumber(6);
}); // 10
document.getElementById("button-min").addEventListener("click", function(){
    operate(11);
}); // 11
document.getElementById("button-1").addEventListener("click", function(){
    addNumber(1);
}); // 12
document.getElementById("button-2").addEventListener("click", function(){
    addNumber(2);
}); // 13
document.getElementById("button-3").addEventListener("click", function(){
    addNumber(3);
}); // 14
document.getElementById("button-plus").addEventListener("click", function(){
    operate(15);
}); // 15
document.getElementById("button-0").addEventListener("click", function(){
    addNumber(0);
}); // 16
document.getElementById("button-deci").addEventListener("click", function(){
    addDecimal();
}); // 17
document.getElementById("button-equal").addEventListener("click", function(){
    calculateTotal();
}); // 18

function addDecimal(){
    if(decimal === 1){
        return;
    }
    else{
        decimal = 1;
        displayText(total + ".");
    }
}

function plusMinus(){
    total *= -1;
    displayText(total);
}

function buttonClear(){
    displayText(0);
    total = 0;
    decimal = 0;
    prevValue = null;
}

function addNumber(value){
    lastPerform = 0;
    if(decimal === 1){
        
    }
    else{
        if(total == 0){
            if(value == 0){
                displayText(0);
            }
            else{
                total = value;
                displayText(total);
            }
        }
        else if(total < 0){
            total = total * 10;
            total -= value;
            displayText(total);
        }
        else{
            total = total * 10;
            total += value;
            displayText(total);
        }
    }
    
    console.log(total);
}

function operate(operator){
    if(lastPerform === 1){
        return;
    }
    if(operator == 2){
        total = total/100;
        displayText(total);
        lastPerform = 1;
    }
    else if(operator == 3){ // divide
        if(prevValue == null){
            prevValue = total;
            total = 0;
            decimal = 0;
            prevOp = operator;
            lastOp = operator;
            lastPerform = 1;

        }
        else{
            prevValue = calculate(prevValue, total, prevOp);
            displayText(prevValue);
            total = 0;
            decimal = 0;
            prevOp = operator;
            lastOp = operator;
            lastPerform = 1;


        }
    }
    else if(operator == 7){ // multiply
        if(prevValue == null){
            prevValue = total;
            total = 0;
            decimal = 0;

            prevOp = operator;
            lastOp = operator;
            lastPerform = 1;


        }
        else{
            prevValue = calculate(prevValue, total, prevOp);
            displayText(prevValue);
            total = 0;
            decimal = 0;

            prevOp = operator;
            lastOp = operator;
            lastPerform = 1;



        }
    }
    else if(operator == 11){ // minus
        if(prevValue == null){
            prevValue = total;
            total = 0;
            decimal = 0;

            prevOp = operator;
            lastOp = operator;
            lastPerform = 1;



        }
        else{
            prevValue = calculate(prevValue, total, prevOp);
            displayText(prevValue);
            total = 0;
            decimal = 0;

            prevOp = operator;
            lastOp = operator;
            lastPerform = 1;



        }
    }
    else if (operator == 15){ // plus
        if(prevValue == null){
            prevValue = total;
            total = 0;
            decimal = 0;

            prevOp = operator;
            lastOp = operator;
            lastPerform = 1;


        }
        else{
            prevValue = calculate(prevValue, total, prevOp);
            displayText(prevValue);
            total = 0;
            decimal = 0;

            prevOp = operator;
            lastOp = operator;
            lastPerform = 1;


        }
    }
    else{ // error
        alert("error, unidentified operator")
        buttonClear();
    }
}

function displayText(text){
    const display = document.getElementById("calc-display");
    display.innerHTML = "" + text;
}

function calculate(prev, curr, operator){
    if(operator == 3){ // divide
        return prev/curr;
    }
    else if(operator == 7){ // multiply
        return prev*curr;
    }
    else if(operator == 11){ // minus
        return prev-curr;

    }
    else if (operator == 15){ // plus
        return prev+curr;
    }
    else{ // return previous value for multiple equal presses
        total=lastValue;
        return calculate(prev,lastValue,lastOp);
    }
}

function calculateTotal(){
    prevValue = calculate(prevValue, total, prevOp);
    displayText(prevValue);
    lastValue = total;
    total = 0;
    prevOp = null;
}
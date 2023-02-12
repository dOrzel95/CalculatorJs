const printWindowHandler = document.querySelector(".print-window");
const charButtonHandler = [...document.querySelectorAll(".keyboard-button")];
let mergingChar = false;
let firstElementOperation;
let secondElemntOperation;
let typeOperation;



const clearWindow = ()=>{
    printWindowHandler.innerHTML = "";
}

const switchMergingChar = ()=>{
    mergingChar = !mergingChar;
}

const cutLastCharWithString = (string)=>{
    string.innerHTML = string.innerHTML.slice(0, string.innerHTML.length-1);
}

const printing = (string, char, mergingChar)=>{
    if(!mergingChar){
        string.innerHTML = char;
        switchMergingChar(); 
    }else{
        string.innerHTML +=char;
    }
}

const setTypeOperation = (type)=>{
    typeOperation = type;
}

const getTypeOperation = ()=>{
    return typeOperation;
}

const setFirstElementOperation = (element)=>{
    firstElementOperation = element;
}

const getFirstElementOperation = ()=>{
    return firstElementOperation;
}

const setSecondElemntOperation = (element)=>{
    secondElemntOperation = element;
}

const getSecondElemntOperation = ()=>{
    return secondElemntOperation;
}

const sum = (a,b)=>{
    return parseFloat(a)+parseFloat(b);
}

const subtraction = (a,b)=>{
    return parseFloat(a)-parseFloat(b);
}

const multiplication = (a,b)=>{
    return parseFloat(a)*parseFloat(b);
}

const division = (a,b)=>{
    return parseFloat(a)/parseFloat(b);
}

const printingCharToCalculatorWindow = (char)=>{

    if(char.className.includes("function-buttons")){

        if(char.getAttribute('value') ==='c'){
            clearWindow();
            return;
        }
        else if(char.getAttribute('value') ==="backspace"){
            cutLastCharWithString(printWindowHandler);
        }
        else if(char.getAttribute('value') ==="+"){
            setFirstElementOperation(printWindowHandler.innerHTML);
            setTypeOperation(char.getAttribute('value'));
            clearWindow();
        }
        else if(char.getAttribute('value') ==="-"){
            setFirstElementOperation(printWindowHandler.innerHTML);
            setTypeOperation(char.getAttribute('value'));
            clearWindow();
        }
        else if(char.getAttribute('value') ==="*"){
            setFirstElementOperation(printWindowHandler.innerHTML);
            setTypeOperation(char.getAttribute('value'));
            clearWindow();
        }
        else if(char.getAttribute('value') ==="/"){
            setFirstElementOperation(printWindowHandler.innerHTML);
            setTypeOperation(char.getAttribute('value'));
            clearWindow();
        }
        else if(char.getAttribute('value') ==="="){
            setSecondElemntOperation(printWindowHandler.innerHTML);
            clearWindow();
            switch(getTypeOperation())
            {
                case "+":{
                    console.log(getFirstElementOperation()+" "+getSecondElemntOperation())
                    printing(printWindowHandler,sum(getFirstElementOperation(), getSecondElemntOperation()),mergingChar);
                    
                    break;
                }
                case "-":
                {
                    printing(printWindowHandler,subtraction(getFirstElementOperation(), getSecondElemntOperation()),mergingChar);
                    break;
                }
                case "*":{
                    printing(printWindowHandler,multiplication(getFirstElementOperation(), getSecondElemntOperation()),mergingChar)
                    clearToOperationArray(operation);
                    break;
                }
                case"/":{
                    printing(printWindowHandler,division(getFirstElementOperation(), getSecondElemntOperation()),mergingChar)
                    break;
                }

            }
            
        }
        
    }else{
        printing(printWindowHandler, char.getAttribute('value'), mergingChar);
    }
    
}

charButtonHandler.forEach(char=>{
    char.addEventListener("click", ()=>printingCharToCalculatorWindow(char));
});

window.onload = clearWindow();

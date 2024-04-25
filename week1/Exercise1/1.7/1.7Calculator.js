let toCalculate = "";

document.getElementById("display").innerHTML = toCalculate;

const buttons = document.getElementById('buttons');
buttons.addEventListener("click",function(event){
    event.preventDefault;
    const clickedElement = event.target;
    if (clickedElement.textContent === "=") {
        return; 
    }
    toCalculate += clickedElement.textContent;
    document.getElementById("display").innerHTML = toCalculate;
})

const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click",function(event){
    event.stopPropagation();
    const stringToCalculate = document.getElementById("display").textContent; 
    document.getElementById("display").innerHTML = eval(stringToCalculate);
    toCalculate = "";
})
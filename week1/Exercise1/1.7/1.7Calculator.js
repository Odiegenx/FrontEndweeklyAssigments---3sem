let toCalculate = "";

// 2. Manipulate the DOM:
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

// 3. Handling of Events with Event listener.
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click",function(event){
    event.stopPropagation();
    const stringToCalculate = document.getElementById("display").textContent; 
    document.getElementById("display").innerHTML = eval(stringToCalculate);
    toCalculate = "";
})
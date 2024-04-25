let names = ["Lars","Peter","Jan","Bo"];

document.getElementById("ul").innerHTML = createNameHtml(names);

function createNameHtml(names){
    const mapped = names.map((name) => {
        return '<li>'+name+'</li>';
    })
    return '<ul>'+mapped.join('')+'</ul>';
}

document.addEventListener("DOMContentLoaded",addEventListeners);

function addEventListeners(){
    const nameForm = document.getElementById("nameForm");
    nameForm.addEventListener("submit", addNameToList);
    const removeLastNameOnListButton = document.getElementById("1");
    removeLastNameOnListButton.addEventListener("click",removeFirstName);
    const removeFirstNameOnListButton = document.getElementById("2");
    removeFirstNameOnListButton.addEventListener("click",removeLastName);
}   

function removeFirstName(event){
    event.preventDefault();
    names.shift();
    document.getElementById("ul").innerHTML = createNameHtml(names);
}
function removeLastName(event){
    event.preventDefault();
    names.pop();
    document.getElementById("ul").innerHTML = createNameHtml(names);
}

function addNameToList(event){
    event.preventDefault();
    const elementWithNameToAdd = document.getElementById("name");
    names.push(elementWithNameToAdd.value);
    document.getElementById("name").value = "";
    document.getElementById("ul").innerHTML = createNameHtml(names);
}
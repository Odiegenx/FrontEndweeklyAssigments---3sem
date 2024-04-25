
const button = document.getElementById('1');
button.addEventListener("click",function(){
    const div = document.getElementById('1');
    console.log('Hi from '+div.id);
    div.style.backgroundColor = 'rgb(0,0,0)';
})
const button1 = document.getElementById('2');
button1.addEventListener("click",function(){
    const div1 = document.getElementById('2');
    console.log('Hi from '+ div1.id);
    div1.style.backgroundColor = 'rgb(0,0,0)';
})

const outerDiv = document.getElementById('outer');
outerDiv.addEventListener("click",function(event){
    const clickedElement = event.target;
    document.getElementById("textbox").innerHTML = 'Hi from '+clickedElement.id;
})

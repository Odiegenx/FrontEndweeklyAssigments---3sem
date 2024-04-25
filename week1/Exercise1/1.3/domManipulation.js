// 1.3 simple DOM Manipolation:

// 1.3.1
document.addEventListener( "DOMContentLoaded",function() {
const elements = document.getElementsByTagName('div');
for(let prop of elements){
    prop.style.backgroundColor = 'rgb(222,120,0)';
}

// 1.3.2
const button = this.getElementById('4');
button.addEventListener("click",function(){
    console.log("Clicked");
    const div1 = document.getElementById('1');
    console.log(div1);
    div1.style.backgroundColor = 'rgb(0,0,0)';
})

const newButton = document.createElement('button');
newButton.textContent = 'Button from JavaScript';
document.body.appendChild(newButton);
newButton.addEventListener('click', () => {
    const div1 = document.getElementById('1');
    const div2 = document.getElementById('2');
    const div3 = document.getElementById('3');

    div1.style.backgroundColor = randomColor();
    div2.style.backgroundColor = randomColor();
    div3.style.backgroundColor = randomColor();
  });

});

function randomColor(){
    const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let code = "";
    for(let i=0; i<6; i++){
     code += hexArray[Math.floor(Math.random()*16)];
    }
    return `#${code}`
   }

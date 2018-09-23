const divContainer = document.getElementById("divContainer");
const randomButton = document.querySelector('#randColor');
const blackButton = document.querySelector('#black');
const eraseButton = document.querySelector('#erase');
const clearButton = document.querySelector('#clear');
const changeButton = document.querySelector('#dimensions');

let random = false;
let color = "black";
let dimensions = 16;
createGrid(dimensions);

randomButton.addEventListener('click', randomClick);
blackButton.addEventListener('click', blackClick);
eraseButton.addEventListener('click', eraseClick);
clearButton.addEventListener('click', clearClick);
changeButton.addEventListener('click', changeClick);

function randomClick(){
  random = true;
}

function eraseClick(){
  color = "white";
  random = false;
}

function blackClick(){
  color = "black";
  random = false;
}

function changeClick(){
  clearGrid();
  dimensions = prompt("Enter dimensions (one number):", "e.g. 25");
  createGrid(dimensions);
  color = 'black';
}

function createGrid(boxes){
    for(i=0; i<boxes*boxes; i++){
        const div = document.createElement('div');
        div.setAttribute=('id', 'box');
        div.addEventListener("mouseover", changeColor);
        div.style.width = 500/boxes + 'px';
        div.style.height = 500/boxes + 'px';
        div.style.boxShadow = '0px 0px 0px 1px black inset';
        div.style.margin = '0px';
        div.style.padding = '0px';
        div.style.display = 'inline-block';
        div.style.float = 'left';
        divContainer.appendChild(div);
  }
}

function changeColor(){
  if(random){
    color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
  }
  this.style.backgroundColor = color;
}

function clearGrid(){
  while(divContainer.firstChild){
    divContainer.removeChild(divContainer.firstChild);
  }
}

function clearClick(){
  clearGrid();
  createGrid(dimensions);
}

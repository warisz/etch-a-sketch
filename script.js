const divContainer = document.getElementById("divContainer");
const randomButton = document.querySelector('#randColor');
const blackButton = document.querySelector('#black');
const eraseButton = document.querySelector('#erase');

let color = "black";
createGrid(16);

randomButton.addEventListener('click', randomClick);
blackButton.addEventListener('click', blackClick);
eraseButton.addEventListener('click', eraseClick);

function randomClick(){
  color = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
}

function eraseClick(){
  color = "white";
}

function blackClick(){
  color = "black";
}

function createGrid(boxes){
    for(i=0; i<boxes*boxes; i++){
        console.log(i);
        const div = document.createElement('div');
        div.setAttribute=('id', 'box');
        div.style.width = divContainer.clientWidth/boxes + 'px';
        div.style.height = divContainer.clientHeight/boxes + 'px';
        div.style.boxShadow = '0px 0px 0px 1px black inset';
        div.style.margin = '0px';
        div.style.padding = '0px';
        div.style.display = 'inline-block';
        div.style.float = 'left';
        divContainer.appendChild(div);
  }
}

$("#box").hover(function(){
  $(this).css("background-color", color);
    }, function(){
    $(this).css("background-color", color);
});

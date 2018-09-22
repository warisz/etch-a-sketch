const divContainer = document.getElementById("divContainer");
createGrid(16);


function createGrid(boxes){
    for(i=0; i<boxes*boxes; i++){
        console.log(i);
        const div = document.createElement('div');
        div.style.width = divContainer.clientWidth/boxes + 'px';
        div.style.height = divContainer.clientHeight/boxes + 'px';
        div.style.boxShadow = '0px 0px 0px 1px black inset';
        div.style.margin = '0px';
        div.style.padding = '0px';
        div.style.display = 'inline-block';
        div.style.float = 'left';
        div.onmouseover= function(){
          div.style.backgroundColor = 'black';
        }
        divContainer.appendChild(div);
  }
}

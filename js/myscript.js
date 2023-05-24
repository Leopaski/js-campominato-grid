let tabella = document.getElementById('tabella');
function createCell(className){
    const cell=document.createElement('div');  
   	cell.classList.add(className); 
    return cell;
}

play.addEventListener('click', function(){
    tabella.innerHTML="";
    for (i=0;i<100;i++){
        const newCell = createCell('div','cell ',
                        `<p>${i + 1}</p>`);
        newCell.addEventListener('click', function(){
        this.classList.toggle('clicked');
        tabella.appendChild(createCell("cella")); 
    })}
});






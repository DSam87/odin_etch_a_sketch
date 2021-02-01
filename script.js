// alert("Welcom to my note pad!");

let gridSizeBtns = document.querySelectorAll('button');
let grid = document.querySelector('.grid-container');
let resolution = 0;

// initial grid creation
createGrid(16);


// Adding Event Listener To Run createGrid when clicked
gridSizeBtns.forEach(element => {
    element.addEventListener('click', () =>{
        createGrid(element.getAttribute('data-value'));
    });
    
});

function createGrid(value){
    if(value == 64){
        grid.style.gridTemplateColumns = `repeat(${value}, minmax(5px, 1fr))`;
        grid.style.gridTemplateRows = `repeat(${value} ,minmax(5px, 1fr))`;
    }else{
        grid.style.gridTemplateColumns = `repeat(${value}, minmax(10px, 1fr))`;
        grid.style.gridTemplateRows = `repeat(${value} ,minmax(10px, 1fr))`;
    }


    resolution = value * value;
    for(let i = 1; i <= resolution; i++){
        let div = document.createElement('div');
        div.className="cell";
        grid.appendChild(div);
    }

    addEventForDivs();
    
}



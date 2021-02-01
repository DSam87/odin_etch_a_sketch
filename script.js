// alert("Welcom to my note pad!");
let gridSizeBtns = document.querySelectorAll('.buttons button');
let colorBtns = document.querySelectorAll('.color-buttons button');
let grid = document.querySelector('.grid-container');
let resolution = 0;
let color = "black";
let eraser = document.querySelector('.eraser button');
let gridSize = 16;

// initial grid creation
createGrid(gridSize);

eraser.addEventListener('click', ()=>{
    clearPage();
    createGrid(gridSize);
});


// Adding Event Listeneters To The Color Buttons
colorBtns.forEach(element=>{
    element.addEventListener('click', ()=>{
        changeColor(element.getAttribute('data-value'));
    });
});


// Adding Event Listener To Run createGrid when clicked
gridSizeBtns.forEach(element => {
    element.addEventListener('click', () =>{
        clearPage();
        gridSize = element.getAttribute('data-value')
        createGrid(gridSize);
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


function addEventForDivs(){
    let divs = document.querySelectorAll(".cell");
    let mouseDown = 0;
    divs.forEach(element => {
        element.addEventListener('mouseenter', ()=>{
            if(mouseDown === 0){
                element.style.backgroundColor ;
            }else{
                element.style.backgroundColor = `${color}`;
            }
        });
        element.addEventListener('mousedown', ()=>{
            mouseDown = 1;
        });
        element.addEventListener('mouseup', ()=>{
            mouseDown = 0;
        })
    });
}

function clearPage(){
    let divs = document.querySelectorAll(".cell");
    divs.forEach(element =>{
        element.remove()
    });
}

function changeColor(newColor){
    color = newColor;
}



let container = document.querySelector(".container");
let userOption = 16;
let mainGrid = "";

let buttons = document.querySelectorAll(".controls button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        setUserOption(button.id);
    });   
});

function setUserOption(id) {
    if(id == 1){                
        generateGrid(16);
    } else if(id == 2) {
        //userOption = 32;
        generateGrid(32);
    } else if (id == 3) {
        //userOption = 64;
        generateGrid(64);
    } else {
        clearGrid();
    }
    //generateGrid(userOption);
};

function getCurrentGrid() {
    mainGrid = document.querySelectorAll('.grid-item');
    mainGrid.forEach(gridElement => {
        gridElement.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "black";
        });
    });
    return mainGrid.length;
}

function clearGrid() {
    mainGrid.forEach(element => {
        container.removeChild(element);    
    });    
}

function generateGrid(option) {
    if (getCurrentGrid() > 0) {
        clearGrid();
    }    
    let pxSize = 960 / option;
    let pxColumns = "";    
    container.style.display = 'grid';

    // each row will append one div
    for (let index = 0; index < option; index++) {
        pxColumns = pxColumns + " " + pxSize + "px";
        for (let index = 0; index < option; index++) {        
            let gridItem = document.createElement("div");
            gridItem.classList.add('grid-item');                        
            container.appendChild(gridItem);        
        }        
    }
    // set the template columns and rows
    container.style.gridTemplateColumns = `${pxColumns}`;    
    container.style.gridTemplateRows = `${pxColumns}`;
    getCurrentGrid();
}

generateGrid(userOption);

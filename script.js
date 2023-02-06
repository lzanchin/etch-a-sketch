let container = document.querySelector(".container");
let userOption = 16;
let mainGrid = "";
let updateColorCount = 0;
let r = 0;
let g = 0;
let b = 0;
let defaultColor = "rgb(0, 0, 0)";
let slider = document.getElementById("rangeSizes");
let rangeLabel = document.getElementById("selectedValue");

let buttons = document.querySelectorAll(".controls button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        setUserOption(button.id);
    });   
});

slider.oninput = function() {
    setUserOptionSlider(this.value);
  }

function setUserOptionSlider(value) {
    rangeLabel.innerHTML = `${value} x ${value}`;
    generateGrid(value);
}

function setUserOption(id) {
    if(id == 1){                
        generateGrid(16);
    } else if(id == 2) {        
        generateGrid(32);
    } else if (id == 3) {        
        generateGrid(64);
    } else {
        clearGrid();
    }    
};

function getCurrentGrid() {
    mainGrid = document.querySelectorAll('.grid-item');
    mainGrid.forEach(gridElement => {
        gridElement.addEventListener("mouseover", (e) => {
            if (updateColorCount == 10) {
                defaultColor = "rgb(0, 0, 0)";                
                updateColorCount = 0;
            }
            if (updateColorCount == 0) {                
                e.target.style.backgroundColor = defaultColor; 
                defaultColor = randomRgbColor();                
            }
            if (updateColorCount > 0 && updateColorCount < 10) {
                r = r - (r* 0.10);
                g = g - (g * 0.10);
                b = b - (b * 0.10);
                defaultColor = `rgb(${r}, ${g}, ${b})`;
                e.target.style.backgroundColor = defaultColor;                
            }
            updateColorCount++;                 
        });
    });
    return mainGrid.length;
}

function clearGrid() {    
    if (getCurrentGrid() == 0 ) {
        return;
    }
    mainGrid.forEach(element => {
        container.removeChild(element);    
    });    
}

function randomInteger(max) {
    return Math.floor(Math.random() * (max+1));
}

function randomRgbColor() {
    r = randomInteger(255);
    g = randomInteger(255);
    b = randomInteger(255);
    return `rgb(${r}, ${g}, ${b})`
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

setUserOptionSlider(36);

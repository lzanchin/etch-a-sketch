let container = document.querySelector(".container");
let totalColumns = 64;
let totalRows = 64;
let userOption = 0;

let buttons = document.querySelectorAll(".controls button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        setUserOption(button.id);
    });   
});

function setUserOption(id) {
    if(id == 1){
        userOption = 16;
    } else if(id == 2) {
        userOption = 32;
    } else {
        userOption = 64;
    }
    generateGrid(userOption);
};

function generateGrid(option) {
    let pxSize = 960 / option;
    let pxColumns = "";    
    container.style.display = 'grid';

    // each row will append one div
    for (let index = 0; index < option; index++) {
        pxColumns = pxColumns + " " + pxSize + "px";
        for (let index = 0; index < option; index++) {        
            let gridItem = document.createElement("div");
            gridItem.style.backgroundColor = "white";
            gridItem.textContent = " ";
            container.appendChild(gridItem);        
        }        
    }
    // set the template columns and rows
    container.style.gridTemplateColumns = `${pxColumns}`;    
    container.style.gridTemplateRows = `${pxColumns}`;
}

generateGrid(totalColumns, totalRows);
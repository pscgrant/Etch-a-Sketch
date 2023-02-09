function makeGrid(number) {
    const container = document.querySelector(".container");
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    for(let i = 1; i <= number * number; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-box")
        container.appendChild(div);
    }
    document.querySelector(".grid-size").textContent = `${number}x${number}`;
};

function changeColor(event) {
    event.target.style.backgroundColor = "Black";
};

function resetGrid() {
    let num = prompt("Enter grid size less than or equal to 100:");
    if (num === undefined || num === null || num === "") {
        return;
    };

    while (num > 100) {
        num = prompt("Number too big! Please enter grid size less than 100:")
    };

    const container = document.querySelector("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    };
    makeGrid(num);
    let gridBoxList = document.querySelectorAll(".gridBox");
    gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover",changeColor)});
};

function clearGrid() {
    let gridBoxList = document.querySelectorAll(".grid-box");
    gridBoxList.forEach(gridBox => {gridBox.style.backgroundColor = null});
};

let gridNumber = 16;
makeGrid(gridNumber);
let gridBoxList = document.querySelectorAll(".grid-box");
gridBoxList.forEach(gridBox => {gridBox.addEventListener("mouseover", changeColor)});

const clearBtn = document.querySelector(".clear-btn");
const resetBtn = document.querySelector(".reset-btn");
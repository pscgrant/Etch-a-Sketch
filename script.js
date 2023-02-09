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
}
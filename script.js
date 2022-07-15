const color = document.getElementById('color');
const rainbow = document.getElementById('rainbow');
const clear = document.getElementById('clear');
const changeSize = document.getElementById('change-size');
const sketchPad = document.getElementById('pad');

function createGrid(rows, cols) {
    sketchPad.style.setProperty('--grid-rows', rows);
    sketchPad.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        sketchPad.appendChild(cell).className = "grid-item";
    };
};

createGrid(16, 16);
let color = 'black';

function createGrid(size) {
    let sketchPad = document.getElementById('pad');
    let cells = sketchPad.querySelectorAll('div');
    cells.forEach((div) => div.remove());
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', colorCell);
        sketchPad.insertAdjacentElement('beforeend', cell);
    };
};

createGrid(16);

function changeSize(inputValue) {
    if (inputValue >= 2 && inputValue <= 100) {
        createGrid(inputValue);
    } else {
        alert("Only sizes 2-100 are available");
    }
}

function colorCell() {
    if (color === 'rainbow') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color === 'color') {
        const colorPicker = document.getElementById('color-picker');
        this.style.backgroundColor = colorPicker.value;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function clearPad() {
    let sketchPad = document.getElementById('pad');
    let cells = sketchPad.querySelectorAll('div');
    cells.forEach((div) => div.style.backgroundColor = 'white');
}
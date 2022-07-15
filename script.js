function createGrid(size) {
    let sketchPad = document.getElementById('pad');
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        let cell = document.createElement("div");
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
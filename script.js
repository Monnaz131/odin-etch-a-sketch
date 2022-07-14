const color = document.getElementById('color');
const colorPickerPen = document.getElementById('color-picker-pen');
const colorPickerBackground = document.getElementById('color-picker-background');
const rainbow = document.getElementById('rainbow');
const background = document.getElementById('background');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const gridSize = document.getElementById('grid-size');
const sketchPad = document.getElementById('pad');

function changeBackgroundColor() {
    let newBackgroundColor = colorPickerBackground.value;
    sketchPad.style.backgroundColor = newBackgroundColor;
}
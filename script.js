const board = document.querySelector('.container');
let pixels = [];
let sideLength = 5;

for (i = 0; i < sideLength; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (j = 0; j < sideLength; j++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        row.appendChild(pixel);
    }
    board.appendChild(row);
}
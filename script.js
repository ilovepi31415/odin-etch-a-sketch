const board = document.querySelector('.board');
const changeDimensions = document.querySelector('#dimensions');
let pixels = [];
let sideLength = 16;

document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});

function makegrid(n) {
    board.replaceChildren();
    for (i = 0; i < n; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (j = 0; j < n; j++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseover', event => {mouseover(event)});
            row.appendChild(pixel);
        }
        board.appendChild(row);
    }    
}

function mouseover(e) {
    if (e.buttons == 1) {
        e.target.style.backgroundColor = 'white';
    }
    else {
        e.target.style.backgroundColor = 'black';
    }
}

changeDimensions.addEventListener('click', () => {
    let choice = prompt('Choose dimensions:');
    let n = +choice;
    makegrid(n);
});

makegrid(sideLength);
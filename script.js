const board = document.querySelector('.board');
let pixels = [];
let sideLength = 16;

function makegrid(n) {
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

makegrid(sideLength);
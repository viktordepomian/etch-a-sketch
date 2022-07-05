const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset-btn');
const colorPicker = document.querySelector('.color-picker');
let amountOfRowsCols = 16;

function makeRowsYo(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for(x = 0; x < (rows * cols); x++){
        let newSquare = document.createElement('div');
        container.appendChild(newSquare);
        newSquare.classList.add('squareStyle');
        newSquare.addEventListener('click', () => {
            makeSquareColored();
        });
        function makeSquareColored(){
            newSquare.style.backgroundColor = colorPicker.value;
        }

        resetBtn.addEventListener('click', () => {
            newSquare.style.backgroundColor = 'white';
        });
    };
};

makeRowsYo(amountOfRowsCols, amountOfRowsCols);

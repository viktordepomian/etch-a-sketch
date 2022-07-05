const container = document.querySelector('.container');
const squaresInput = prompt('Please input how many squares(e.g. 16, 32, 64) Max: 100.');

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
            newSquare.classList.toggle('coloredSquare')   ;
        }
    };
};


makeRowsYo(squaresInput, squaresInput);

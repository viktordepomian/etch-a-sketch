const container = document.querySelector('.container');


function createSquareDivs(){
    const newSquare = document.createElement('div');
    newSquare.classList.add('squareStyle');
    container.appendChild(newSquare);
};

createSquareDivs();
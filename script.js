function fillShetchPad (size) {
    let board = document.querySelector(".board");
    // to remove all the divs created to repopulate the board
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    // this will let us create as many rows and columns as we want
    board.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    board.style.gridTemplateRows=`repeat(${size}, 1fr)`;

    let boardSize = size * size;
    for (let i = 0; i < boardSize; i++) {
        // creates a div/square
        let square = document.createElement('div');
        // change color of the square when hovering over
        square.addEventListener('mouseover', colorSquare);
        // makes each square 'white'
        square.style.backgroundColor = "white";
        // Appends that to 'board'
        board.insertAdjacentElement("beforeend", square);
    }
}

fillShetchPad(16);


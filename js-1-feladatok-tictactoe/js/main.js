let matrix = [];
let stepCount = 0;
let cols = 3;
let rows = 3;
let mark = 'X';

let cells = document.querySelectorAll('.cell');

const initState = () => {
    for (var i = 0; i < rows; i++) {
        matrix[i] = [];

        for (var j = 0; j < cols; j++) {
            matrix[i][j] = null;
        }
    }
}

const changeMatrixValue = (element) => {
    const row = parseInt(element.dataset.row, 10);
    const cell = parseInt(element.dataset.cell, 10);
    matrix[row][cell] = element.textContent;
}

const deleteSigns = () => {
    cells.forEach((item) => item.textContent = '');
}

const increaseCounter = (i) => {
    stepCount = i++;
}

const modifyCell = (element) => {
    element.textContent = mark;
    element.removeEventListener('click', handleClick)
};
const setMark = () => {
    mark === 'X' ? mark = '0' : mark = 'X';
}

const handleClick = (event) => {
    increaseCounter();
    modifyCell(event.target);
    setMark();
    changeMatrixValue(event.target);
    checkWinner();
}

const addClickListener = () => {
    cells.forEach(element => element.addEventListener('click', handleClick))
};

const removeAllClickListeners = () => {
    cells.forEach(element => element.removeEventListener('click', handleClick))
}

const checkValues = (array) => array.map(row => {
    //row.forEach(element => element.textContent === 'X' || element.textContent === '0' ? true : false);
    if (row[0] === 'X' && row[1] === 'X' && row[2] === 'X') {
        endGame();
    } else if (row[0] === '0' && row[1] === '0' && row[2] === '0') {
        endGame();
    }
})

const checkColumnValues = () =>
    checkValues(matrix.map((array, i) =>
        array.map((item, j) => matrix[j][i])));

const checkDiagonalValues = () =>
    checkValues([
        matrix.map((array, i) => matrix[i][i]),
        matrix.map((array, i) => matrix[i][matrix[i].length - i - 1])
    ]);

const checkWinner = () => {
    console.log(checkColumnValues());
    console.log(checkDiagonalValues());
   if (checkValues(matrix) === true || checkColumnValues() === true || checkDiagonalValues() === true) {
        endGame();
    }

}

const setMessage = (message = 'Let\'s play.') => {
    document.querySelector('.message').textContent = message;
}

const endGame = () => {
    setMessage('The winner is Player ' + (mark === 'X' ? 'O' : 'X') + '.');
    removeAllClickListeners();
}
const newGame = () => {
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', function () {

        initState();
        addClickListener();
        deleteSigns();
        setMessage('Playing...');
        setMark();
    })

}

newGame();

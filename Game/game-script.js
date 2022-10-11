const gameBoardArray = ['X', 'X', 'O',
    'O', 'X', 'O',
    'X', 'O', 'X'];

const gameBoardObj = ((innerArray, doc) => {
    const boardArray = innerArray.slice();
    const gameBoardDiv = doc.querySelector('.game-board');
    const allCells = gameBoardDiv.children;

    const printArray = () => console.table(boardArray);

    const render = () => {
        for (let i = 0; i < 9; i++) {
            allCells[i].textContent = boardArray[i];
        }
    }
    return { printArray, render };
})(gameBoardArray, document);

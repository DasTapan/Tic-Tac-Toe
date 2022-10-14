const gameBoarDiv = document.querySelector('.game-board');
const resultDiv = document.querySelector('.result-banner');

const gameBoardObj = (() => {
    let _cellIndex;
    let _iterator = 0;
    const _boardArray = [null, null, null, null, null, null, null, null, null];

    const _checkRepetition = (clickedCell) => {
        _cellIndex = Array.from(gameBoarDiv.children).indexOf(clickedCell);
        if (_boardArray[_cellIndex] === null) _insertMark(clickedCell)
        else return
    }

    const _insertMark = (clickedCell) => {
        let _validMark = game.getValidMark();
        _boardArray[_cellIndex] = _validMark;
        _iterator++;
        displayController.displayInput(clickedCell, _validMark);
        game.checkWinner(_cellIndex, _iterator);
        game.swapMark();
    }

    const getArray = () => _boardArray;

    const sanitizeValue = (targetedCell) => {
        _checkRepetition(targetedCell);
    }

    return { sanitizeValue, getArray };
})();

const Player = (_name, _mark, _valid) => {
    const getMark = () => _mark;
    const getValidStatus = () => _valid;
    const _setValidity = () => {
        _valid = !_valid;
    }

    const toggleValidity = () => {
        _setValidity();
    }

    return {
        getMark,
        getValidStatus,
        toggleValidity
    }
}

const game = (() => {
    let _validPlayer;
    let _validPlayerMark;

    const _validator = () => {
        if (player1.getValidStatus() == true) _validPlayer = player1
        else _validPlayer = player2

        _validPlayerMark = _validPlayer.getMark();
        return _validPlayerMark;
    }

    const getValidMark = () => {
        return _validator();
    }

    const _toggleValidity = () => {
        player1.toggleValidity();
        player2.toggleValidity();
    };

    const checkWinner = (cellIndex, count) => {
        let array = gameBoardObj.getArray().slice();
        let status;
        switch (cellIndex) {
            case 0:
                if (array[0] === array[1] && array[0] === array[2]) displayController.displayResult('Victory');
                else if (array[0] === array[3] && array[0] === array[6]) displayController.displayResult('Victory');
                else if (array[0] === array[4] && array[0] === array[8]) displayController.displayResult('Victory');
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 1:
                if (array[0] === array[1] && array[0] === array[2]) displayController.displayResult('Victory');
                else if (array[1] === array[4] && array[1] === array[7]) displayController.displayResult('Victory');
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 2:
                if (array[0] === array[1] && array[0] === array[2]) displayController.displayResult('Victory');
                else if (array[2] === array[5] && array[2] === array[8]) displayController.displayResult('Victory');
                else if (array[2] === array[4] && array[2] === array[6]) displayController.displayResult('Victory');
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 3:
                if (array[3] === array[4] && array[3] === array[5]) displayController.displayResult('Victory');
                else if (array[0] === array[3] && array[0] === array[6]) displayController.displayResult('Victory');
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 4:
                if (array[1] === array[4] && array[1] === array[7]) displayController.displayResult('Victory');
                else if (array[3] === array[4] && array[3] === array[5]) displayController.displayResult('Victory');
                else if (array[0] === array[4] && array[0] === array[8]) displayController.displayResult('Victory');
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 5:
                if (array[2] === array[5] && array[2] === array[8]) displayController.displayResult('Victory');
                else if (array[3] === array[4] && array[3] === array[5]) displayController.displayResult('Victory');
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 6:
                if (array[0] === array[3] && array[0] === array[6]) displayController.displayResult('Victory');
                else if (array[6] === array[7] && array[6] === array[8]) displayController.displayResult('Victory');
                else if (array[6] === array[4] && array[6] === array[2]) displayController.displayResult('Victory');
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 7:
                if (array[1] === array[4] && array[1] === array[7]) displayController.displayResult('Victory');
                else if (array[6] === array[7] && array[6] === array[8]) displayController.displayResult('Victory');
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 8:
                if (array[2] === array[5] && array[2] === array[8]) displayController.displayResult('Victory');
                else if (array[6] === array[7] && array[6] === array[8]) displayController.displayResult('Victory');
                else if (array[0] === array[4] && array[0] === array[8]) displayController.displayResult('Victory');
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;

            default:
                break;
        }
    }

    const swapMark = () => {
        _toggleValidity();
    };

    return { getValidMark, swapMark, checkWinner };
})();

const displayController = (() => {
    const _render = (_cell, _mark) => {
        _cell.textContent = _mark;
    }

    const displayInput = (cell, mark) => {
        _render(cell, mark);
    }

    const _display = (result) => {
        resultDiv.textContent = result;
    }

    const displayResult = (message) => {
        _display(message);
    }

    return { displayInput, displayResult };
})();

const player1 = Player('player1', 'X', true);
const player2 = Player('player2', 'O', false);

gameBoarDiv.addEventListener('click', (event) => {
    let targetedCell = event.target.closest('div');
    gameBoardObj.sanitizeValue(targetedCell);
    console.log(targetedCell);
})
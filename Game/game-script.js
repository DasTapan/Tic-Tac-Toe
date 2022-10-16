const gameBoarDiv = document.querySelector('.game-board');
const resultDiv = document.querySelector('.result-banner');
const replayButton = document.querySelector('#replay');

const gameBoardObj = (() => {
    let _cellIndex;
    let _iterator = 0;
    let _gameEnded = false;
    const _boardArray = [null, null, null, null, null, null, null, null, null];

    const _checkRepetition = (clickedCell) => {
        _cellIndex = Array.from(gameBoarDiv.children).indexOf(clickedCell);
        if (_boardArray[_cellIndex] === null) {
            if (_gameEnded === false) _insertMark(clickedCell);
        }
        else return
    }

    const _insertMark = (clickedCell) => {
        let _validMark = game.getValidMark();
        if( _validMark === 'X') clickedCell.classList.add('cross-symbol');
        if(_validMark === 'O') clickedCell.classList.add('round-symbol');
        _boardArray[_cellIndex] = _validMark;
        _iterator++;
        displayController.displayInput(clickedCell, _validMark);
        game.getWinner(_cellIndex, _iterator);
        game.swapMark();
    }

    const toggleGameEnd = () => {
        _gameEnded = !_gameEnded;
    }

    const getArray = () => _boardArray;

    const sanitizeValue = (targetedCell) => {
        _checkRepetition(targetedCell);
    }

    const setIteratorZero = () => {
        _iterator = 0;
    }

    const resetBoardArray = () => {
        for (let i = 0; i < 9; i++) {
            _boardArray[i] = null;
        }
    }

    return { sanitizeValue, getArray, toggleGameEnd, setIteratorZero, resetBoardArray };
})();

const Player = (_name, _mark, _valid) => {
    const getName = () => _name;
    const getMark = () => _mark;
    const getValidStatus = () => _valid;
    const _setValidity = () => {
        _valid = !_valid;
    }

    const toggleValidity = () => {
        _setValidity();
    }

    const _resetValidPlayer = (value) => {
        _valid = value;
    }

    const resetPlayer = (value) => {
        _resetValidPlayer(value);
    }

    return {
        getName,
        getMark,
        getValidStatus,
        toggleValidity,
        resetPlayer
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

    const _checkWinner = (cellIndex, count) => {
        let array = gameBoardObj.getArray().slice();
        let status;
        switch (cellIndex) {
            case 0:
                if (array[0] === array[1] && array[0] === array[2]) _decideWinner(array[0]);
                else if (array[0] === array[3] && array[0] === array[6]) _decideWinner(array[0]);
                else if (array[0] === array[4] && array[0] === array[8]) _decideWinner(array[0]);
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 1:
                if (array[0] === array[1] && array[0] === array[2]) _decideWinner(array[0]);
                else if (array[1] === array[4] && array[1] === array[7]) _decideWinner(array[1]);
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 2:
                if (array[0] === array[1] && array[0] === array[2]) _decideWinner(array[0]);
                else if (array[2] === array[5] && array[2] === array[8]) _decideWinner(array[2]);
                else if (array[2] === array[4] && array[2] === array[6]) _decideWinner(array[2]);
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 3:
                if (array[3] === array[4] && array[3] === array[5]) _decideWinner(array[3]);
                else if (array[0] === array[3] && array[0] === array[6]) _decideWinner(array[0]);
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 4:
                if (array[1] === array[4] && array[1] === array[7]) _decideWinner(array[1]);
                else if (array[3] === array[4] && array[3] === array[5]) _decideWinner(array[3]);
                else if (array[0] === array[4] && array[0] === array[8]) _decideWinner(array[0]);
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 5:
                if (array[2] === array[5] && array[2] === array[8]) _decideWinner(array[2]);
                else if (array[3] === array[4] && array[3] === array[5]) _decideWinner(array[3]);
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 6:
                if (array[0] === array[3] && array[0] === array[6]) _decideWinner(array[0]);
                else if (array[6] === array[7] && array[6] === array[8]) _decideWinner(array[6]);
                else if (array[6] === array[4] && array[6] === array[2]) _decideWinner(array[6]);
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 7:
                if (array[1] === array[4] && array[1] === array[7]) _decideWinner(array[1]);
                else if (array[6] === array[7] && array[6] === array[8]) _decideWinner(array[6]);
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;
            case 8:
                if (array[2] === array[5] && array[2] === array[8]) _decideWinner(array[2]);
                else if (array[6] === array[7] && array[6] === array[8]) _decideWinner(array[6]);
                else if (array[0] === array[4] && array[0] === array[8]) _decideWinner(array[0]);
                else {
                    if (count === 9) displayController.displayResult('Match Drawn');
                }
                break;

            default:
                break;
        }
    }

    const getWinner = (cellIndex, count) => {
        _checkWinner(cellIndex, count);
    }

    const _decideWinner = (mark) => {
        if (mark === 'X') displayController.displayResult(`${player1.getName()} WON`);
        if (mark === 'O') displayController.displayResult(`${player2.getName()} WON`);
        gameBoardObj.toggleGameEnd();
    }

    const swapMark = () => {
        _toggleValidity();
    };

    return { getValidMark, swapMark, getWinner };
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

    const _resetGame = () => {
        let allCells = Array.from(gameBoarDiv.children);

        allCells.forEach(value => {
            value.textContent = '';
            value.classList.remove('cross-symbol', 'round-symbol');
        })

        resultDiv.textContent = '';

        gameBoardObj.resetBoardArray();

        gameBoardObj.setIteratorZero();

        gameBoardObj.toggleGameEnd();

        player1.resetPlayer(true);
        player2.resetPlayer(false);
    }

    return { displayInput, displayResult, _resetGame };
})();

const player1 = Player(localStorage.getItem('player1'), 'X', true);
const player2 = Player(localStorage.getItem('player2'), 'O', false);

gameBoarDiv.addEventListener('click', (event) => {
    let targetedCell = event.target.closest('div');
    gameBoardObj.sanitizeValue(targetedCell);
    console.log(targetedCell);
})

replayButton.addEventListener('click', () => {
    displayController._resetGame();
})
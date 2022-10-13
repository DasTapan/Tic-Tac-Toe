const gameBoarDiv = document.querySelector('.game-board');

const gameBoarObj = (() => {
    let _cellIndex;
    const _boardArray = [null, null, null, null, null, null, null, null, null];

    const _checkRepetition = (clickedCell) => {
        _cellIndex = Array.from(gameBoarDiv.children).indexOf(clickedCell);
        if (_boardArray[_cellIndex] === null) _insertMark(clickedCell)
        else return
    }

    const _insertMark = (clickedCell) => {
        let _validMark = game.getValidMark();
        _boardArray[_cellIndex] = _validMark;
        displayController.displayInput(clickedCell, _validMark);
        game.swapMark();
    }

    const sanitizeValue = (targetedCell) => {
        _checkRepetition(targetedCell);
    }

    return { sanitizeValue };
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

    const swapMark = () => {
        _toggleValidity();
    };

    const disableClick = (clickedCell) => {
        clickedCell.style.pointerEvents = 'none';
    }

    return { getValidMark, swapMark, disableClick };
})();

const displayController = (() => {
    const _render = (_cell, _mark) => {
        _cell.textContent = _mark;
    }

    const displayInput = (cell, mark) => {
        _render(cell, mark);
    }

    return { displayInput };
})();

const player1 = Player('player1', 'X', true);
const player2 = Player('player2', 'O', false);

gameBoarDiv.addEventListener('click', (event) => {
    let targetedCell = event.target.closest('div');
    gameBoarObj.sanitizeValue(targetedCell);
    console.log(targetedCell);
})
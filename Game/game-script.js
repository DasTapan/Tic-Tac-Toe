const gameBoarDiv = document.querySelector('.game-board');

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

    return { getValidMark };
})();

const displayController = (() => {
    const _render = (_cell, _mark) => {
        _cell.textContent = _mark;
    }

    const displayInput = (cell,mark) => {
        _render(cell,mark);
    }

    return { displayInput };
})();

const player1 = Player('player1', 'X', true);
const player2 = Player('player2', 'X', false);

gameBoarDiv.addEventListener('click', (event) => {
    let targetedCell = event.target.closest('div');
    let targetedCellClass = targetedCell.classList[1];
    console.log(targetedCellClass);
    let validMark = game.getValidMark();
    displayController.displayInput(targetedCell, validMark);
})
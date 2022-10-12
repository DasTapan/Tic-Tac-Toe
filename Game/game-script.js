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

const player1 = Player('player1', 'X', true);
const player2 = Player('player2', 'X', false);

gameBoarDiv.addEventListener('click', (event) => {
    let targetedCell = event.target.closest('div');
    let targetedCellClass = targetedCell.classList[1];
    console.log(targetedCellClass);
})
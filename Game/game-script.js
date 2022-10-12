const gameBoardDiv = document.querySelector('.game-board');

const gameBoardObj = (() => {
    const _gameBoardArray = ['', '', '', '', '', '', '', '', ''];
})();

const displayController = (() => {
    const _render = (_cellClass,_mark) => {
        const _cell = gameBoardDiv.querySelector(_cellClass);
        _cell.textContent = _mark;
    }

    const displayValue = (cellClass,mark) => {
        _render(cellClass,mark);
    }

    return { displayValue };
})();

const game = (() => {
    let _validPlayer;

    const _validator = () => {
        if (player1.valid == true) _validPlayer = player1;
        else _validPlayer = player2;
        console.log(`valid: ${_validPlayer}`);
    }

    const findValidPlayer = () => {
        _validator();
    };

    return { findValidPlayer };
})();

const Player = (_name, _mark, _valid) => {

    const name = _name;
    const mark = _mark;
    const valid = _valid;

    return { name, mark, valid };
}


const player1 = Player('Player1', 'X', true);
const player2 = Player('Player2', 'O', false);

gameBoardDiv.addEventListener('click', (event) => {
    let _targetCell = event.target.closest('div');
    const validPlayer = game.findValidPlayer();

});


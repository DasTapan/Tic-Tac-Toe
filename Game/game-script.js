const divRef = document.querySelector('.container');

const game = (() => {
    let validPlayer;

    const validator = () => {
        if (player1.valid == true) validPlayer = player1.name;
        else validPlayer = player2.name;
        console.log(`valid: ${validPlayer}`);
    }

    const findValidPlayer = () => {
        validator();
    };

    return { findValidPlayer };
})();

const Player = (_name, _mark, _valid) => {

    const name = _name;
    const mark = _mark;
    const valid = _valid;

    return { name, mark, valid };
}

divRef.addEventListener('click', game.findValidPlayer);

const player1 = Player('Player1', 'X', true);
const player2 = Player('Player2', 'O', false);


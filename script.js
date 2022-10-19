const startButton = document.querySelector('#start');

const player1 = document.querySelector('#player-one-name');
const player2 = document.querySelector('#player-two-name');

// stops starting game without name
const validateInput = (() => {
    const _validate = () => {
        if (player1.value != '' && player2.value != '') return true;
        else return false;
    }

    const check = () => {
        return _validate();
    }

    _displayError = () => {
        let illegalPlayer;
        player1.value === '' ? illegalPlayer = player1 : illegalPlayer = player2;
        illegalPlayer.value = 'Fill up name*';
        illegalPlayer.setAttribute('style', 'color: red');
    }

    return { check, _displayError };
})();

const infoPicker = (() => {
    //pass value to game.script file
    const valueSender = () => {
        let _playerOneName = player1.value;
        let _playerTwoName = player2.value;

        localStorage.setItem('player1', _playerOneName);
        localStorage.setItem('player2', _playerTwoName);

        window.location.href = "index.html";
    }

    return { valueSender };
})();

startButton.addEventListener('click', () => {
    if (validateInput.check() === true) {
        infoPicker.valueSender();
        window.open('./Game/game.html', '_self');
    } else validateInput._displayError();
})
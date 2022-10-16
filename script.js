const startButton = document.querySelector('#start');

const infoPicker = (() => {
    let _player1 = document.querySelector('#player-one-name');
    let _player2 = document.querySelector('#player-two-name');

    const valueSender = () => {
        let _playerOneName = _player1.value;
        let _playerTwoName = _player2.value;
        localStorage.setItem('player1', _playerOneName);
        localStorage.setItem('player2', _playerTwoName);
        window.location.href = "index.html";
    }

    return { valueSender };
})();

startButton.addEventListener('click', () => {
    infoPicker.valueSender();
    window.open('./Game/game.html', '_self');
})
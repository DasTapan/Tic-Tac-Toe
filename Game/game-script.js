const gameBoarDiv = document.querySelector('.game-board');
gameBoarDiv.addEventListener('click', (event) => {
    let targetedCell = event.target.closest('div');
    console.log(targetedCell);
})
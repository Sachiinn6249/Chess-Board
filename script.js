const gameButton = document.getElementById('game-button');
const gameChess = () =>{
   for(let i =0;i<64;i++){
    const container = document.querySelector('.chessboard');
    const chessBoard = document.createElement('div');
    chessBoard.classList.add('square');
    const row = Math.floor(i / 8);
    console.log(row);
    const col = i % 8;
    if ((row + col) % 2 === 0) {
      chessBoard.style.backgroundColor = 'white';
    } else {
      chessBoard.style.backgroundColor = 'black';
    }
    container.style.outline= '10px double black';
    gameButton.innerText = 'Start';
    container.appendChild(chessBoard);
    
   }
        
}

gameButton.addEventListener("click",gameChess);
var game_over = document.getElementById('gameOver');

socket.on('getTheWinner', function(msg){
  socket.emit('getTheMessage',{
    theWinnerId: msg.winnerId
  });
});

socket.on('backHome', function(msg){
  backToHome();
});

socket.on('winning', function(msg){
  gameOver.innerHTML = '<p>YOU WIN</p>';
});

socket.on('losing', function(msg){
  gameOver.innerHTML = '<p>YOU LOSE</p>';
});

// function showGameOver(winner){
//   if (msg.playerWin == 1) {
//     socket.emit('winning');
//   }
//   else{
//     socket.emit('lossing');
//   }
//   gameOver.innerHTML = '<p>GAME OVER</p>';
// }

function backToHome(){
  var homePage = $("#homePage").html();
  bg.html(homePage);
}

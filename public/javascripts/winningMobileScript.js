var gameOverEl = document.getElementById('gameOver');

socket.on('getTheWinner', function(msg){
  showGameOver();
});

socket.on('backHome', function(msg){
  backToHome();
});

function showGameOver(){
  gameOverEl.innerHTML = 'GAME OVER';
}

function backToHome(){
  var homePage = $("#homePage").html();
  bg.html(homePage);
}

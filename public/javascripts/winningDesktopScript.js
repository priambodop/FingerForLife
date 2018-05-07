var winCanvas = document.getElementById('canvasWinStage');
var winCtx = winCanvas.getContext('2d');

var podium = new Image();

var winnerCharArr = [];

winnerCharArr.push('images/brocoDudeTiny.png');
winnerCharArr.push('images/dabuDonutTiny.png');
winnerCharArr.push('images/grapeYodaTiny.png');
winnerCharArr.push('images/summerEggTiny.png');

socket.on('getTheWinner', function(msg){
  console.log(`The Winner is : ${msg.playerWin}`);
  drawWinner(msg.playerWin);
});

socket.on('backHome', function(msg){
  var homePage = $("#homePage").html();
  bg.html(homePage);
});

function drawStage(){
  podium.src = 'images/winning.png';
  podium.onload = function(){
    winCtx.drawImage(podium, 0, 0);
  }
}

function drawWinner(winner){
  if (winner == 1) {
    drawFirstWinner(player1Val);
    drawSecondWinner(player2Val);
  }else{
    drawFirstWinner(player2Val);
    drawSecondWinner(player1Val);
  }
}

function drawFirstWinner(firstWinner){
  var first = new Image();
  first.src = winnerCharArr[firstWinner - 1];
  winCtx.drawImage(first, 40, 210);
}

function drawSecondWinner(secondWinner){
  var second = new Image();
  second.src = winnerCharArr[secondWinner - 1];
  winCtx.drawImage(second, 180, 330);
}

function toHomePage(){
  socket.emit('goBackHome', 'back home');
}
drawStage();

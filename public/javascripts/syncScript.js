var play1 = document.getElementById("player1");
var play2 = document.getElementById("player2");
var number = "";
var player = 0;
var socket = io();

function getRandInt(){
  var text = "";
  text = Math.floor(Math.random() * (999999 - 111111)) + 111111;
  number = text;
  console.log(text);
  document.getElementById("code").innerHTML = text;
}

window.onload = getRandInt;

socket.on('player joining', function(msg){

  if (msg == number) {
    if (player < 1) {
      play1.innerHTML = 'player 1 is joining in ' + msg;
      socket.emit('you join', 'You are now joined to the game ! \n Wait for other players to join...');
      player = player + 1;
    }else {
      play2.innerHTML = 'player 2 is joining in ' + msg;
      socket.emit('you join', 'The game is about to begin...');
      player = player + 1;
    }
  }else {
    socket.emit('wrong code', 'You input the wrong code :(');
  }

});

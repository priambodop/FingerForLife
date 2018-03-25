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
      play1.innerHTML = 'player is joining in ' + msg;
      socket.emit('you join', 'YES YOU ARE JOINED !!!');
      player = player + 1;
    }else {
      play2.innerHTML = 'player is joining in ' + msg;
      socket.emit('you join', 'YES YOU ARE JOINED !!!');
      player = player + 1;
    }
  }else {
    socket.emit('wrong code', 'You are not permitted !');
  }

});

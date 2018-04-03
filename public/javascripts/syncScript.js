var play1 = document.getElementById("player1");
var play2 = document.getElementById("player2");
var number = "";
var player = 0;
var socket = io();
var playerArray = [];

function getRandInt(){
  var text = "";
  text = Math.floor(Math.random() * (999999 - 111111)) + 111111;
  number = text;
  document.getElementById("code").innerHTML = text;
}

//THIS IS THE SAME AS $(FUNCTION()) JQUERY
window.onload = getRandInt;

socket.on('connect', function(){
  console.log('connected to server...');
});

socket.on('requestAccepted', function(msg){
  if (msg.room == number) {
    if (player < 1) {
      play1.innerHTML = 'player 1 is joining in ' + msg.room;
      playerArray.push(msg);
      player = player + 1;

    }else {
      play2.innerHTML = 'player 2 is joining in ' + msg.room;
      playerArray.push(msg);
      player = player + 1;
      console.log(playerArray);
    }
  }
});

$('#next').submit(function(){
  socket.emit('toCharPage', playerArray);
  return false;
});

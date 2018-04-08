var socket = io();
var player = 0;
var players = [];
var text = 0;
var bg = $(".stage-area");

/**
 * Socket.io connection related
*/

socket.on('connect', function(){
  getRandInt();
  console.log('Host is connected to socket.io server... ');
  console.log(`This is sync socket id: ${socket.id}`);
});

socket.on('requestAccepted', function(msg){
  console.log(`${msg.room} is opened`);
  requestAccepted(msg);
});

socket.on('toNextPage', function(msg){
  toCharDesk();
});

socket.on('selectingAcc', function(msg){
  console.log(msg);
});

// Socket.io code related ends here

function toCharDesk(){
  var charHtml = $("#charDesktop").html();
  bg.html(charHtml);
}

function getRandInt(){
  text = Math.floor(Math.random() * (999999 - 111111)) + 111111;
  document.getElementById("roomId").innerHTML = text;

  var roomString = text.toString();
  console.log(`this is a host room ${roomString}`);

  socket.emit('hostJoinRoom', {
    id: socket.id,
    room: roomString
  });
}

function requestAccepted(msg){
  var rom = text.toString();
  console.log(`this is room: ${rom}`);

  if (msg.room === rom) {
    if (player < 1) {
      console.log(`Player with id: ${msg.id} is joined`);

      var player1 = {
        id: msg.id,
        number: 1
      }
      players.push(player1);

      var play1 = document.getElementById("player1");
      play1.innerHTML = 'player 1 is joining in ' + msg.room;
      player = player + 1;

    }else {
      console.log(`Player with id: ${msg.id} is joined`);

      var player2 = {
        id: msg.id,
        number: 2
      }

      players.push(player2);
      console.log(players);

      var play2 = document.getElementById("player2");
      play2.innerHTML = 'player 2 is joining in ' + msg.room;
      socket.emit('roomFull', {
        id: msg.id,
        room: msg.room,
      });
    }
  }
}

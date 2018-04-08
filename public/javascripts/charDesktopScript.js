console.log(`char desktop id is ${socket.id}`);

socket.emit('charDesktop', 'Char Desktop is connecting to socket.io');

socket.on('charDesktopAcc', function(msg){
  console.log(msg);
});

socket.on('fromCharMobile', function(msg){
  console.log(msg);
  var feedback = document.getElementById("player1Char");
  feedback.innerHTML = `Your char is ${msg}`;
});

socket.on('charSelecting', function(msg){
  if (msg.id === players[0].id) {
    console.log(`Player 1 is selecting char number ${msg.val}`);
    var player1 = document.getElementById("player1Char");
    player1.innerHTML = `Your char is ${msg.val}`;
    // player1.innerHTML = '<img src="images/BrocoDude.png" alt="finger">';
  }else{
    console.log(`Player 2 is selecting char number ${msg.val}`);
    var player2 = document.getElementById("player2Char");
    player2.innerHTML = `Your char is ${msg.val}`;
  }
  // console.log(`Player 1 is selecting char number ${val}`);
  // var feedback = document.getElementById("player1Char");
  // feedback.innerHTML = `Your char is ${val}`;
});

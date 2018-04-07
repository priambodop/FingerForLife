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

socket.on('charSelecting', function(val){
  console.log(`Player is selecting char number ${val}`);
  var feedback = document.getElementById("player1Char");
  feedback.innerHTML = `Your char is ${val}`;
});

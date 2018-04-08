//debug purpose begin
console.log(`char desktop id is ${socket.id}`);

socket.emit('charDesktop', 'Char Desktop is connecting to socket.io');

socket.on('charDesktopAcc', function(msg){
  console.log(msg);
});
//debug purpose end

//When a client is selecting a char on mobile page,
//The choosen character is shown.
socket.on('charSelecting', function(msg){
  if (msg.id === players[0].id) {
    console.log(`Player 1 is selecting char number ${msg.val}`);
    var player1 = document.getElementById("player1Char");
    player1.innerHTML = `Your char is number ${msg.val}`;
  }else{
    console.log(`Player 2 is selecting char number ${msg.val}`);
    var player2 = document.getElementById("player2Char");
    player2.innerHTML = `Your char is number${msg.val}`;
  }
});

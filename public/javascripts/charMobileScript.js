// socket.io connection related starts here

socket.emit('charMobile', `Char Mobile is connecting to Socket.io with id: ${socket.id}`);

socket.on('CharMobileAccepted', function(msg){
  console.log(msg);
});

// socket.io connection related ends here


function selectChar(){
  var valButton = $('input[name="radioChar"]:checked').val();
  socket.emit('selectingChar', {
    val: valButton,
    id: socket.id
  });

  //debug purpose
  console.log(`Player is choosing char number ${valButton}`);
}

function sendChar(){
  var valButton = $('input[name="radioChar"]:checked').val();
  socket.emit('sendingChar', {
    val: valButton,
    id: socket.id
  });

  //debug purpose
  console.log(`PLayer has sending fixed character with number: ${valButton}`);
}

// socket.io connection related starts here

socket.emit('charMobile', `Char Mobile is connecting to Socket.io with id: ${socket.id}`);

socket.on('messageCreated', function(msg){
  console.log(msg);
});

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

  console.log(`The value is ${valButton}`);
}

function sendChar(){
  var valButton = $('input[name="radioChar"]:checked').val();
  console.log(`This character is fix ${valButton}`);
}

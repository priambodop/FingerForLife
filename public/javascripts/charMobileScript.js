console.log(socket.id);

socket.emit('charMobile', 'this should work');

socket.on('messageCreated', function(msg){
  console.log(msg);
});

socket.on('CharMobileAccepted', function(msg){
  console.log(msg);
});

function emitButton(){
  socket.emit('createMessage', 'Trying to pass the text');
}

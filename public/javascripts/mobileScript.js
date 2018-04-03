//LEARN JQUERY !!!
var socket = io();
var messages = document.getElementById("joined");

socket.on('connect', function(){
  console.log('already connected');
});

$('form').submit(function(e){
  e.preventDefault();
  socket.emit('requestToJoin', {
    id: socket.id,
    room: $('#code').val()
  }, function(){
    $('#code'.val(''))
  });
  return false;
});

socket.on('joinSucceed', function(msg){
  messages.innerHTML = msg;
});

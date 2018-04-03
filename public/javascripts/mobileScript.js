//LEARN JQUERY !!!
var socket = io();
var messages = document.getElementById("joined");

socket.on('connect', function(){
  console.log('already connected');
});

$('#join').submit(function(){
  socket.emit('requestToJoin', {
    id: socket.id,
    room: $('#code').val()
  }, function(){
    $('#code'.val(''))
  });
  return false;
});

$('#nextPage').submit(function(){
  socket.emit('mobileToChar', {
    id: socket.id,
    room: $('#code').val()
  }, function(){
    console.log('data has been sent');
  });
});

socket.on('joinSucceed', function(msg){
  messages.innerHTML = msg;
});

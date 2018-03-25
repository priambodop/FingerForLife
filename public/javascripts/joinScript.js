$(function(){
  var socket = io();
  var messages = document.getElementById("joined");

  $('form').submit(function(){
    socket.emit('joining game', $('#code').val());
    return false;
  });

  socket.on('you join', function(msg){
    messages.innerHTML = msg;
  });
});

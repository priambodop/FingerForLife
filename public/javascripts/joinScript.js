$(function(){
  //LEARN JQUERY !!!
  var socket = io();
  var messages = document.getElementById("joined");

  $('form').submit(function(){
    socket.emit('joining game', $('#code').val());
    socket.emit('enter room', $('#code').val());
    return false;
  });

  socket.on('joined room', function(msg){
    messages.innerHTML = msg;
  });


});

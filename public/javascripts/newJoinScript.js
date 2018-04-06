var socket = io();

// Socket.io Code related

socket.on('connect', function(){
  console.log('Ok you are connected !');
  console.log(`This is join id: ${socket.id}`);
});

socket.on('joinSucceed', function(msg){
  var messages = document.getElementById("joined");
  messages.innerHTML = msg;
});

// Socket.io Code Ends Here

function requestToJoin(){
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
}

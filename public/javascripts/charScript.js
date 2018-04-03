var socket = io();

socket.on('mobileInChar', function(data){
  console.log(`current id: ${socket.id}`);
  socket.id = data.id;
  console.log(socket.id);
});

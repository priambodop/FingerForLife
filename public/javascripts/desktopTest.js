console.log(`char desktop id is ${socket.id}`);

socket.emit('charDesktop', 'desktop should work');

socket.on('charDesktopAcc', function(msg){
  console.log(msg);
});

socket.on('messageCreated', function(msg){
  console.log(msg);
});

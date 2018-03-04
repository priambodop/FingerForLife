var io;
var gameSocket;

exports.initGame = function(socketio, gameSocketio){
  io = socketio;
  gameSocket = gameSocketio;

  gameSocket.emit('connected', { message: "You are connected!"});

  gameSocket.on('hostCreateNewGame', hostCreateNewGame);

  gameSocket.on('joinGame', joinGame);
}

function hostCreateNewGame(){
  var thisGameId = Math.floor(Math.random() * (999999 - 111111)) + 111111;

  this.emit('newGameCreated', {gameId: thisGameId, mySocketId: this.id});

  this.join(thisGameId.toString());
}

function joinGame(data){
  var thisSocket = this;

  var room = gameSocket.manager.rooms["/" + data.gameId];

  data.mySocketId = thisSocket.id;

  //join the room
  thisSocket.join(data.gameId);

  io.sockets.in(data.gameId).emit('playerJoinedRoom', data);
}

var stepLeftHtml = document.getElementById('stepLeft');
var instructionEl = document.getElementById('instruction');

socket.on('startTheGame', function(msg){
  showInstruction(3);
});


function stepClicked(){
  socket.emit('stepClicked', {
    playerID: socket.id
  });
}


function showInstruction(beginCounter){
  instructionEl.innerHTML = 'Press left and right to move your character';

  var timer = setInterval(showText, 1000);

  function showText(){
    beginCounter -= 1;
    if (beginCounter < 1) {
      instructionEl.innerHTML = '';
      clearInterval(timer);
    }
  }
}

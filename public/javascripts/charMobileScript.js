socket.emit('charMobile', `Char Mobile is connecting to Socket.io with id: ${socket.id}`);

socket.on('messageCreated', function(msg){
  console.log(msg);
});

socket.on('CharMobileAccepted', function(msg){
  console.log(msg);
});

function sendButton(){
  $("#nextButton").click(function(){
    var valButton = $('input[name="radioChar"]:checked').val();
    socket.emit('selectingChar', valButton);
  });
  // $(".charList").submit(function(e){
  //   e.preventDefault();
  //   if (!$('input[name="radioChar"]').is(':checked')) {
  //     alert("Please Choose a Character");
  //   }else{
  //     sendChar();
  //     socket.emit('selecting', 'HEY IM SELECTING !!!!');
  //   }
  // });
}

function selectChar(){
  var valButton = $('input[name="radioChar"]:checked').val();
  socket.emit('selectingChar', valButton);

  console.log(`The value is ${valButton}`);
}

function sendChar(){
  var valButton = $('input[name="radioChar"]:checked').val();
  console.log(`This character is fix ${valButton}`);
}

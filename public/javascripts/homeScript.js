var bg = $(".stage-area");
// var socket = io();

/**
 * Socket.io connection related
*/

// socket.on('connect', function(){
//   console.log('already connected to socket.io server... ');
// });
//
// socket.on('requestAccepted', function(msg){
//   console.log(`${msg.room} is opened`);
//   requestAccepted(msg);
// });
//
//
// socket.on('joinSucceed', function(msg){
//   var messages = document.getElementById("joined");
//   messages.innerHTML = msg;
// });

// Socket.io code related ends here


var titleHtml = $("#homePage").html();
bg.html(titleHtml);

// function toMobile(){
//   var mobileHtml = $(".mobilePage").html();
//   bg.html(mobileHtml);
// }
//
// function toSync(){
//   var syncHtml = $("#syncPage").html();
//   bg.html(syncHtml);
//
// }

// function toCharDesk(){
//   var charHtml = $("#charDesktop").html();
//   bg.html(charHtml);
// }

// function toCharMobile(){
//   var charMobileHtml = $("#charMobile").html();
//   bg.html(charMobileHtml);
// }

// function getRandInt(){
//   var text = Math.floor(Math.random() * (999999 - 111111)) + 111111;
//   document.getElementById("roomId").innerHTML = text;
// }

function startClicked(){
  var syncHtml = $("#syncPage").html();
  bg.html(syncHtml);


  // socket.emit('joinClicked', {
  //   room: $('#code').val()
  // });
}

function joinClicked(){
  var mobileHtml = $("#mobilePage").html();
  bg.html(mobileHtml);

}

// function requestToJoin(){
//   $('form').submit(function(e){
//     e.preventDefault();
//     socket.emit('requestToJoin', {
//       id: socket.id,
//       room: $('#code').val()
//     }, function(){
//       $('#code'.val(''))
//     });
//     return false;
//   });
// }

// function requestAccepted(msg){
//
//   var player = 0;
//   if (player < 1) {
//     console.log(`${msg.room} is open`);
//     // $('#player1').append('<p/>').text('Player 1 is joined');
//     // var play2 = document.getElementById("player2");
//     // play2.innerHTML = 'player 2 is joining in ' + msg.room;
//     socket.emit('shouldWork', msg);
//
//     player = player + 1;
//
//   }else {
//     var play2 = document.getElementById("player2");
//     play2.innerHTML = 'player 2 is joining in ' + msg.room;
//
//     player = player + 1;
//
//   }
// }

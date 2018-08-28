//debug purpose begin
console.log(`char desktop id is ${socket.id}`);

socket.emit('charDesktop', 'Char Desktop is connecting to socket.io');

socket.on('charDesktopAcc', function(msg){
  console.log(msg);
});
//debug purpose end

var marker = 0;
var playerData = [];

//When a client is selecting a char on mobile page,
//The choosen character is shown.
socket.on('charSelecting', function(msg){
  if (msg.id === players[0].id) {
    var imagep1 = document.getElementById("imagePlayer1");
    if (msg.val == 1) {
      imagep1.innerHTML = '<img class="imgChar" src="images/BrocoDude.png" alt="finger">';
    }else if (msg.val == 2) {
      imagep1.innerHTML = '<img class="imgChar" src="images/DabuDonut.png" alt="finger">';
    }else if (msg.val == 3) {
      imagep1.innerHTML = '<img class="imgChar" src="images/GrapeYoda.png" alt="finger">';
    }else{
      imagep1.innerHTML = '<img class="imgChar" src="images/SummerEgg.png" alt="finger">';
    }
  }else{
    var imagep2 = document.getElementById("imagePlayer2");
    if (msg.val == 1) {
      imagep2.innerHTML = '<img class="imgChar" src="images/BrocoDude.png" alt="finger">';
    }else if (msg.val == 2) {
      imagep2.innerHTML = '<img class="imgChar" src="images/DabuDonut.png" alt="finger">';
    }else if (msg.val == 3) {
      imagep2.innerHTML = '<img class="imgChar" src="images/GrapeYoda.png" alt="finger">';
    }else{
      imagep2.innerHTML = '<img class="imgChar" src="images/SummerEgg.png" alt="finger">';
    }
  }
});

socket.on('charSent', function(msg){
  marker = marker + msg.marker;
  console.log(`This is marker: ${marker}`);

  if (msg.id === players[0].id) {
    var play1 = document.getElementById("player1Char");
    var playerData1 = {
      playerId: msg.id,
      charValue: msg.val
    };
    playerData[0] = playerData1;
    console.log(`this is value play 1 : ${msg.val}`);
    if (msg.val == 1) {
      play1.innerHTML = 'You choose Broco Dude';
    }else if (msg.val == 2) {
      play1.innerHTML = 'You choose Dabu Donut';
    }else if (msg.val == 3) {
      play1.innerHTML = 'You choose Grape Yoda';
    }else{
      play1.innerHTML = 'You choose Summer Egg';
    }
  }else {
    var play2 = document.getElementById("player2Char");
    var playerData2 = {
      playerId: msg.id,
      charValue: msg.val
    };
    playerData[1] = playerData2;
    console.log(`this is value play 2 : ${msg.val}`);
    if (msg.val == 1) {
      play2.innerHTML = 'You choose Broco Dude';
    }else if (msg.val == 2) {
      play2.innerHTML = 'You choose Dabu Donut';
    }else if (msg.val == 3) {
      play2.innerHTML = 'You choose Grape Yoda';
    }else{
      play2.innerHTML = 'You choose Summer Egg';
    }
  }

  if (marker == 2) {
    marker = 0;
    toGamePlayDesktop();
    console.log(`Player data: ${playerData[0].playerId}`);
    socket.emit('charIsReady', playerData);
  }
});

function toGamePlayDesktop(){
  var gamePlayDesktop = $("#gamePlayDesktop").html();
  bg.html(gamePlayDesktop);
}

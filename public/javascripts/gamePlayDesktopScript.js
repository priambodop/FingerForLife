var canvas = document.getElementById('canvasGpDesktop');
var ctx = canvas.getContext('2d');
var ctx1 = canvas.getContext('2d');
var ctx2 = canvas.getContext('2d');

var track = new Image();
var timer1 = new Image();
var timer2 = new Image();
var timer3 = new Image();

var player1Char = new Image();
var player2Char = new Image();

var dataOfPlayer;

var player1Val = 0;
var player2Val = 0;

var timerArray = [];

var aniFrame;
var aniFrame2;
var progressPlayer1 = 0;
var progressPlayer2 = 0;
var xPosition1 = 100;
var yPosition1 = 340;
var xPosition2 = 90;
var yPosition2 = 400;

timer1.src = 'images/timer1.png';
timer2.src = 'images/timer2.png';
timer3.src = 'images/timer3.png';

timerArray.push(timer1);
timerArray.push(timer2);
timerArray.push(timer3);

socket.on('moveThePlayer', function(msg){
  if (msg === dataOfPlayer[0].playerId) {
    readyPlayerOne();
  }else {
    readyPlayerTwo();
  }

});

socket.on('startTheGame', function(msg){
  init();
  dataOfPlayer = msg;
  console.log(dataOfPlayer);
  console.log(`data of player 1: ${dataOfPlayer[0].playerId}`);
  console.log(`data of player 2: ${dataOfPlayer[1].playerId}`);
  beginCountDown(3, msg);
});

function init(){
  track.src = 'images/track.png';
  track.onload = function(){
      ctx.drawImage(track, 0, 0);
  }

}

function beginCountDown(beginCounter, msg){
  var counter = beginCounter - 1;
  console.log(`before showCountDown: ${counter}`);
  var timer = setInterval(showCountDown, 1000);


  function showCountDown(){
    if (beginCounter >= 1) {
      ctx.drawImage(timerArray[counter], 330, 150);
      beginCounter -= 1;
      counter -= 1;
      console.log(`after showCountDown: ${counter}`);
    }else{
      clearInterval(timer);
      drawChar(msg);
      beginGamePlay();
    }
  }
}

function drawChar(data){
  player1Val = data[0].charValue;
  player2Val = data[1].charValue;

  console.log(`this is player1Val : ${player1Val}`);
  console.log(`this is player2Val : ${player2Val}`);

  if (player1Val == 1) {
    player1Char.src = 'images/brocoDudeTiny.png';

  }else if (player1Val == 2) {
    player1Char.src = 'images/dabuDonutTiny.png';

  }else if (player1Val == 3) {
    player1Char.src = 'images/grapeYodaTiny.png';

  }else{
    player1Char.src = 'images/summerEggTiny.png';
  }

  if (player2Val == 2) {
    player2Char.src = 'images/brocoDudeTiny.png';
  }else if (player2Val == 2) {
    player2Char.src = 'images/dabuDonutTiny.png';
  }else if (player2Val == 3) {
    player2Char.src = 'images/grapeYodaTiny.png';
  }else {
    player2Char.src = 'images/summerEggTiny.png';
  }
}

function beginGamePlay(){
  readyPlayerOne();
  readyPlayerTwo();
}

function readyPlayerOne(){
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 600);

    ctx.save();
    console.log('lets draw player 1');

    progressPlayer1 += 1;
    if ( xPosition1 < 680 && yPosition1 == 340 ) {
      console.log('bottom Row');
      ctx.save();
      xPosition1 += 0.5;
      ctx.drawImage(player2Char, xPosition2, yPosition2);
      ctx.drawImage(player1Char, xPosition1, yPosition1);
      ctx.restore();
    }else if(yPosition1 > 250){
      console.log('right curve');
       // RIGHT CURVE

      ctx.save();

      console.log(`xPosition1: ${xPosition1}`);
      console.log(`yPosition1: ${yPosition1}`);

      if(yPosition1 > 300) {
        xPosition1 += 0.2;
        yPosition1 -= 0.5;
      }else{
        xPosition1 -= 0.3;
        yPosition1 -= 0.5;
      }
      // ctx.translate(xPosition1, yPosition1);
      ctx.drawImage(player1Char, xPosition1, yPosition1);
      ctx.drawImage(player2Char, xPosition2, yPosition2);
      ctx.restore();

    }else if(xPosition1 > 150 && yPosition1 >= 250){
      console.log('middle row');
      // MIDDLE ROW

      xPosition1 -= 0.5;
      ctx.save();

      ctx.drawImage(player1Char, xPosition1, yPosition1);
      ctx.drawImage(player2Char, xPosition2, yPosition2);
      ctx.restore();
    }else if(xPosition1 < 680 && yPosition1 >= 10){
      // LEFT CURVE
      console.log('left curve');
      ctx.save();

      if(yPosition1 > 120) {
        if (yPosition1 > 160) {
          xPosition1 -= 0.7;
          yPosition1 -= 0.6;
        }else {
          yPosition1 -= 0.5;
        }
      }else{
        xPosition1 += 0.5;
        yPosition1 -= 0.7;
      }
      // ctx.translate(xPosition1, yPosition1);
      ctx.drawImage(player1Char, xPosition1, yPosition1);
      ctx.drawImage(player2Char, xPosition2, yPosition2);
      ctx.restore();
    }else {
      console.log('top row');
      ctx.save();
      xPosition1 += 0.5;
      ctx.drawImage(player1Char, xPosition1, yPosition1);
      ctx.drawImage(player2Char, xPosition2, yPosition2);
      ctx.restore();
    }

    ctx.restore();

    ctx.drawImage(track, 0, 0);

    if (progressPlayer1 < 40) {
      console.log(`progressPlayer1: ${progressPlayer1}`);
      aniFrame = requestAnimationFrame(readyPlayerOne);
    }
    else {
      progressPlayer1 = 0;
    }
}


function readyPlayerTwo(){
  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 600);

  ctx.save();
  progressPlayer2 += 1;

  if (xPosition2 < 680 && yPosition2 == 400 ) {
    console.log('bottom Row 2');
    xPosition2 += 0.5;
    ctx.drawImage(player2Char, xPosition2, yPosition2);
    ctx.drawImage(player1Char, xPosition1, yPosition1);
  }else if(yPosition2 > 190){
    console.log('right curve 2');
     // RIGHT CURVE

    ctx.save();

    console.log(`xPosition2: ${xPosition2}`);
    console.log(`yPosition2: ${yPosition2}`);

    if(yPosition2 > 250) {
      if (yPosition2 > 340) {
        xPosition2 += 0.7;
        yPosition2 -= 0.6;
      }else {
        yPosition2 -= 0.5;
      }
    }else{
      xPosition2 -= 0.5;
      yPosition2 -= 0.7;
    }

    // if(yPosition2 > 300) {
    //   xPosition2 += 0.2;
    //   yPosition2 -= 0.5;
    // }else{
    //   xPosition2 -= 0.3;
    //   yPosition2 -= 0.5;
    // }

    ctx.drawImage(player2Char, xPosition2, yPosition2);
    ctx.drawImage(player1Char, xPosition1, yPosition1);

    ctx.restore();

  }else if(xPosition2 > 150 && yPosition2 >= 180){
    console.log('middle row 2');
    // MIDDLE ROW

    xPosition2 -= 0.5;
    ctx.save();

    ctx.drawImage(player2Char, xPosition2, yPosition2);
    ctx.drawImage(player1Char, xPosition1, yPosition1);
    ctx.restore();
  }else if(xPosition2 < 680 && yPosition2 >= 70){
    // LEFT CURVE
    console.log('left curve 2');

    ctx.save();

    if(yPosition2 > 100) {
      xPosition2 -= 0.2;
      yPosition2 -= 0.5;
    }else{
      xPosition2 += 0.3;
      yPosition2 -= 0.5;
    }

    ctx.drawImage(player2Char, xPosition2, yPosition2);
    ctx.drawImage(player1Char, xPosition1, yPosition1);
    ctx.restore();
  }else {
    console.log('top row 2');
    ctx.save();
    xPosition2 += 0.5;
    ctx.drawImage(player2Char, xPosition2, yPosition2);
    ctx.drawImage(player1Char, xPosition1, yPosition1);
    ctx.restore();
  }


  ctx.restore();


  ctx.beginPath();
  ctx.moveTo(100, 450);
  ctx.lineTo(680, 450);
  ctx.arc(680, 390, 60, (Math.PI / 180) * 90, (Math.PI / 180) * 270, true);
  ctx.lineTo(190, 330);
  ctx.arc(190, 210, 120, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
  ctx.lineTo(790, 90);
  ctx.stroke();

  ctx.drawImage(track, 0, 0);

  if (progressPlayer2 < 40) {
    console.log(`progressPlayer2: ${progressPlayer2}`);
    aniFrame2 = requestAnimationFrame(readyPlayerTwo);
  }
  else {
    progressPlayer2 = 0;
  }
}

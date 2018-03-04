// var express = require('express');
// var app = express();
//
// var http = require('http');
// http.createServer(app);
//
// var socketIO = require('socket.io');
// var io = socketIO(http);

JQuery(function($){
  'use strict';

  var IO = {
    init: function(){
      IO.socket = io.connect();
      IO.bindEvents();
    },

    bindEvents: function(){
      IO.socket.on('connected', IO.connected);
      IO.socket.on('newGameCreated', IO.newGameCreated);
      IO.socket.on('playerJoinedRoom', IO.playerJoinedRoom);
      IO.socket.on('beginNewGame', IO.beginNewGame);
    },

    connected: function(){
      App.mySocketId = IO.socket.socket.sessionid;
    }
  };

  var logic = {
    gameId: 0;

    myRole: '',

    mySocketId: '',

    Host:{
      players : [],

      numberOfPlayersInRoom: 0,

      gameInit:function(data){
        logic.gameId = data.gameId;
        logic.mySocketId = data.mySocketId;
        logic.myRole = 'Host';
        logic.Host.numberOfPlayersInRoom = 0;

        App.Host.displayNewGameScreen();
      },

      displayNewGameScreen: function(){
        // displaying game screen
      },

      updateWaitingScreen: function(){
        $('#player1').append('</p>').text('Player is joined the game !');
        logic.Host.numberOfPlayersInRoom += 1;

        if (logic.Host.numberOfPlayersInRoom === 2) {
          IO.socket.emit('hostRoomFull', logic.gameId);
        }
      }
    },

    Player : {
      hostSocketId: '',

      enterCodeClick: function(){
        var data = {
          gameId: +($('#inputGameId').val())
        };

        IO.socket.emit('playerJoinGame', data);

        logic.myRole = 'Player';
      },

      updateWaitingScreen: function(data){
        if (IO.socket.socket.sessionid === data.mySocketId) {
          logic.myRole = 'Player';
          logic.gameId = data.gameId;
        }
      }
    }
  };

}($));

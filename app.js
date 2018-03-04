var express = require('express');
var app = express();

const path = require('path');

var http = require('http').Server(app);

var socketIO = require('socket.io');
var io = socketIO(http);

var finger = require('./public/javascripts/clientSideGame');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response, next) {
  response.render('home');
  next();
});

app.get('/sync', function(req, res){
  res.render('sync');
});

io.on('connection', function(socket){
  finger.initGame(io, socket);
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

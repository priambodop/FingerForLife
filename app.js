var express = require('express');
var app = express();
const path = require('path');

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  //response.render('routes/index')
  //response.send('SO THIS IS A GIANT STEP FOR HUMANITY ! ');
  response.render('home');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

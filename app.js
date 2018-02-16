var express = require('express');
var app = express();

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.use(function(req, res, next){
  console.log("Start");
  next();
});

app.get('/', function(request, response,next) {
  //response.render('routes/index')
  response.send('SO THIS IS A GIANT STEP FOR HUMANITY ! ');
  next();
});

app.use('/',function(req,res){
  console.log('End');
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

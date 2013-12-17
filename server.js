var express  = require('express');
var app      = express(); 					
var mongoose = require('mongoose'); 					
var port  	 = process.env.PORT || 5000; 				
var database = require('./config/database');

mongoose.connect(database.url, function(err) {
  if (err) return err;
console.log('successfully connected to mongoDB!');
});

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev')); 						
	app.use(express.bodyParser()); 							
	app.use(express.methodOverride()); 						
});

require('./app/routes')(app);

app.listen(port);
console.log("App listening on port " + port);
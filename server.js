var express = require('express');
var app = express();    //create our app with express
var mongoose = require('mongoose'); // mongoose for mongodb
var port = process.env.PORT || 5000;
var passport = require('passport');
var flash = require('connect-flash');

mongoose.connect('mongodb://root:pass@mongo.onmodulus.net:27017/ax5Oqevo');

app.configure(function() {
	app.use(express.static(__dirname + '/public')); //sets the static file location
	app.use(express.logger('dev')); //logs every request to the console
	app.use(express.cookieParser());
	app.use(express.bodyParser()); // pull information from html in POST
	app.use(express.methodOverride()); //simulate DELETE and PUT
	app.use(express.session({
		secret: 'pariscongobomie'
	}));
	app.use(passport.initialize());
	app.use(passport.session());
	app.use(flash());
});


// require('./app/routes')(app, passport);
// require('./config/passport')(passport);

app.listen(port, function() {
	console.log("App listening on port 5000");
});
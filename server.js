// set up =========================
var express = require('express'),
	mongoose = require('mongoose'),
	port = process.env.PORT || 8080, 
	database = require('./server/config/database');

var app = express();


// configuration ==================
mongoose.connect(database.url);

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
});

// routes =========================
require('./routes/routes.js')(app);

// listen =========================
app.listen(port);
console.log("App listening on port " + port);
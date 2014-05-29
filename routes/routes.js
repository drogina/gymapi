// api
var path = require('path');
var Gymnast = require('../server/models/gymnast');

module.exports = function(app) {

	// get all gymnasts
	app.get('/api/gymnasts', function(req, res) {

		Gymnast.find(function(err, gymnasts) {
			if (err) {res.send(err)};
			res.json(gymnasts);
		});
	});

	// create new gymnast and send back all gymnasts after creation
	app.post('/api/gymnasts', function(req, res) {
		Gymnast.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			country: req.body.country
		}, function(err, gymnast) {
			if (err) {res.send(err);}

			Gymnast.find(function(err, gymnasts) {
				if (err) {res.send(err);}
				res.json(gymnasts);
			});
		});
	});

	// delete a gymnast
	app.delete('/api/gymnasts/:gymnast_id', function(req, res) {

		Gymnast.remove({
			_id: req.params.gymnast_id
		}, function(err, gymnast) {
			if (err) {res.send(err);}

			Gymnast.find(function(err, gymnasts) {
				if (err) {res.send(err);}

				res.json(gymnasts);
			});
		});
	});

	// application
	app.get('*', function(req, res) {
		res.sendfile(path.resolve(__dirname +  '/../public/index.html'));
	});

}
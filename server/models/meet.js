var mongoose = require('mongoose');

module.exports = mongoose.model('Meet', {
	year: Number,
	name: String,
	city: String,
	country: String,
	results: [{ event: String, gold_id: String, silver_id: String, bronze_id: String }]
});
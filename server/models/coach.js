var mongoose = require('mongoose');

module.exports = mongoose.model('Coach', {
	first_name: String,
	last_name: String,
	clubs: [{ club_id = String, start: Number, end: Number, head_coach: Boolean }]
});
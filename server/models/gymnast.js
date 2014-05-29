var mongoose = require('mongoose');

module.exports = mongoose.model('Gymnast', {
	first_name: String,
	last_name: String,
	country: String,
	status: String,
	years_active: { start: Number, end: Number },
	dob: Date,
	height: { feet: Number, inches: Number, cm: Number },
	clubs: [{ club_id: String, start: Number, end: Number }],
	coaches: [{ coach_id: String, head_coach: Boolean }],
	meets: [{ meet_id: String }]
});
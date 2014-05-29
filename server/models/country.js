var mongoose = require('mongoose');

module.exports = mongoose.model('Country', {
	name: String,
	team_meets: [{ meet_id: String }]
});
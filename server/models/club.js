var mongoose = require('mongoose');

module.exports = mongoose.model('Club', {
	name: String, 
	contact: { street_addr: String, city: String, state_abbr: String, phone: String }
});
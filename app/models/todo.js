var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	username: String,
	text : String,
	done : Boolean
});
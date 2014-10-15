var videos = require('../models/video.js');

var indexController = {
	index: function(req, res) {
		res.render('index')
	}
	current: function(req, res) {
		res.render('current', {
			videos: videos
		});
	}
};

module.exports = indexController;
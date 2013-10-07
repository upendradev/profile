
/*
 * GET users listing.
 */

var contentModel = require('../models/nodejs'),
	content = contentModel();



module.exports = function(req, res){
	console.log(content);
  res.render('nodejs', {model : content});
};

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Cloud Quinn - Web Developer', active: 'Home' });
};
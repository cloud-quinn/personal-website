
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('other-projects', { title: 'Projects', active: 'OtherProjects' });
};

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('bio', { title: 'Bio', active: 'Bio' });
};
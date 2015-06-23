
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('webcoder', { title: 'WebCoder Project', active: 'WebCoder' });
};
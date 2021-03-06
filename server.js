
/**
* Module dependencies.
*/

var express = require('express')
  , routes = require('./routes')
  , bio = require('./routes/bio')
  , contact = require('./routes/contact')
  , otherprojects = require('./routes/other-projects')
  , webcoder = require('./routes/webcoder')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon(__dirname + '/public/img/favicon.ico')); 
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname, 'app')));
    app.use(express.static(path.join(__dirname, 'lib')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/bio', bio.index);
app.get('/webcoder', webcoder.index);
app.get('/other-projects', otherprojects.index);
app.get('/contact', contact.index);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});

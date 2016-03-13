
/**
 * Module dependencies.
 */
//TODO Clean this up, try and make it more readable, eventually require modules on the fly based on customer needs
/*This works? What about this? Is This working now?!?!*/
var express = require('express');

var http = require('http');
var path = require('path');
//load users route
var connection  = require('express-myconnection');
var mysql = require('mysql');
var logger = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var flash    = require('connect-flash');
var session      = require('express-session')
var cors = require('cors');

var app = express();

// Configuration
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(flash()); // use connect-flash for flash messages stored in session
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(methodOverride());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client')));

var server = http.createServer(app);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// Routes
var auth = require('./controllers/middleware/auth_middleware');
var users = require('./routes/users');
var roles = require('./routes/roles');
var user_roles = require('./routes/user_roles');
var contacts = require('./routes/contacts');

app.get('/', function(req, res){
    res.render('index.html');
});

app.use('/api/contacts',auth.middle_auth, contacts);
app.use('/api/users', auth.middle_auth, users);
app.use('/api/roles', auth.middle_auth, roles);
app.use('/api/user_roles', auth.middle_auth, user_roles);


//TESTING HERE
var routed_sessions = require('./controllers/middleware/jwt');

app.get('/login', routed_sessions.login);
app.post('/login', routed_sessions.authenticate);


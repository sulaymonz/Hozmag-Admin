/**
 * Created by sulaymonz on 9/25/17.
 */

// set up ================================================================
// get all the stuff we need

var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// configuration =========================================================
mongoose.connect(configDB.url);  // connecting to database

// require('./config/passport.js')(passport);  // pass passport for configuration

// setting up our express app
app.use(morgan('dev'));  // log every request to console
app.use(cookieParser());  // read cookies (needed for auth)
app.use(bodyParser());  // get info from html forms

app.set('view engine', 'ejs');  // set up ejs for templating

// required for passport
app.use(session({secret: 'sirichoy'}));
app.use(passport.initialize());
app.use(passport.session());  // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ================================================================
require('./app/routes.js')(app, passport);  // load our routes and pass in our app and fully configured passport

// launch ================================================================
app.listen(port);
console.log('The magic happens on port ' + port);



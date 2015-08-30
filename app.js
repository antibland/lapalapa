var compression = require('compression');
var express = require('express');
var session = require('express-session');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('express-cors');

var mongoose = require('mongoose');
var nodemailer = require('nodemailer');

var routes = require('./routes/index');

var app = express();
var _session;

app.use(compression());

module.exports = {
 config: {
   db: {
     production: process.env.PROD_DB,
     development: "mongodb://localhost/test",
     test: "mongodb://localhost/test"
   }
 }
};

if (app.get('env') === 'development' || app.get('env') === 'test') {
  mongoose.connect(module.exports.config.db.development);
} else {
  mongoose.connect(module.exports.config.db.production);
}

var allowedUsernames = ['antibland', 'jesusmtzpa'];

function contains(a, obj) {
  var i = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(cors({
  allowedOrigins: [
    'github.com', 'google.com'
  ]
}));

app.use(session({
  secret: 'ssshhhhh',
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req, res, next) {
  _session=req.session;
  _session.username;
  _session.logged_in;
  next();
});

app.use('/', routes);

app.get('/admin', function(req, res) {
  _session=req.session;

  res.render('admin', {
    section: 'admin',
    logged_in: _session.logged_in,
    username: _session.username,
  });
});

app.post('/login', function(req, res) {
  _session = req.session;
  _session.logged_in = false;

  if (contains(allowedUsernames, req.body.username)) {
    _session.username = req.body.username;
    _session.logged_in = true;

    res.render('index', {
      section: 'index',
      logged_in: _session.logged_in,
      username: _session.username
    });
  } else {
    res.render('admin', {
      section: 'admin',
      logged_in: _session.logged_in,
      username: _session.username
    });
  }
});

app.post('/contact', function(req, res) {

  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'zoho',
    auth: {
      user: 'catering@lapalapapgh.com',
      pass: process.env.zoho_pw || ""
    }
  });

  var mailObj = {
    from: 'From: ' + req.body.name + '\n',
    email: 'Email: ' + req.body.email + '\n',
    message: '\n\n' + req.body.message
  }

  var mailOptions = {
    from: 'catering@lapalapapgh.com', // sender address
    to: 'catering@lapalapapgh.com',
    subject: 'Website Inquiry: ' + req.body.subject,
    text: mailObj.from + mailObj.email + mailObj.message
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.render('contact', { title: 'Something went wrong', msg: 'Something went wrong. Please try again.', err: true, section: 'contact' });
    }
    //Yay!! Email sent
    else {
      res.render('contact', { title: 'Message sent', msg: 'Message sent! Thank you.', err: false, section: 'contact' });
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;

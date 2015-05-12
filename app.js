var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('express-cors')
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');

var routes = require('./routes/index');

var app = express();

//mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://antibland:boring00@ds031862.mongolab.com:31862/lapalapa')

var Schema = mongoose.Schema;

var ContentSchema = new Schema({
  content : String,
  dom_key : String
});

var FriendSchema = new Schema({
  url : String,
  address: String,
  phone: String,
  src: String
});

var Content = mongoose.model('Document', ContentSchema);

var Friend = mongoose.model('Friend', FriendSchema);

function refreshResults() {
  var results = Content.find(function(err, docs) {
    app.set('editable_obj', docs);
  });
}

function getFriends() {
  Friend.find({}, function(err, docs) {
    if (!err) {
      app.set('friends_obj', docs);
    } else { throw err; }
  });
}

app.set('getFriends', getFriends);

refreshResults();

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

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.post('/contact', function(req, res) {

  // create reusable transporter object using SMTP transport
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'antibland@gmail.com',
      pass: 'application specific password'
    }
  });

  var mailOptions = {
    from: req.body.name + '<' + req.body.email + '>', // sender address
    to: 'antibland@gmail.com',
    subject: req.body.subject + ' Message From Website',
    text: req.body.message
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

app.post('/', function(req, res) {
  var request_body = req.body,
      item,
      upsert_data;

  for (var key in request_body) {
    if (request_body.hasOwnProperty(key)) {

      item = new Content({
        _id: false,
        content: request_body[key],
        dom_key: key
      });

      upsert_data = item.toObject();
      Content.update({dom_key: item.dom_key}, upsert_data, {upsert: true}, function(err) {});
    }
  }

  refreshResults();
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

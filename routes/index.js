var express = require('express');
var router = express.Router();
var year = new Date().getFullYear();
var env = process.env.NODE_ENV || "development";

if (env === "development") {
  require("dotenv").config();
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    section: 'index',
    title: 'La Palapa',
    year: year
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    section: 'about',
    title: 'About Us',
    year: year
  });
});

router.get('/trailer', function(req, res, next) {
  res.render('trailer', {
    section: 'trailer',
    title: 'The trailer',
    year: year
  });
});

router.get('/menu', function(req, res, next) {
  var fs            = require('fs'),
      file_names    = fs.readdirSync('./public/images/slideshow'),
      len           = file_names.length,
      scrubbed_names = [],
      file_ext,
      file_name;

  for (var i = 0; i < len; i++) {
    file_name = file_names[i];
    file_ext = file_name.split('.')[1].toLowerCase();

    if ((file_ext === 'jpg' || file_ext === 'jpeg') && !~file_name.indexOf('@2x')) {
      scrubbed_names.push(file_name);
    }
  }

  res.render('menu', {
    section: 'menu',
    title: 'Our Menu',
    images: scrubbed_names,
    year: year
  });
});

router.get('/catering', function(req, res, next) {
  res.render('catering', {
    section: 'catering',
    title: 'Catering',
    year: year
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    section: 'contact',
    title: 'Contact Us',
    year: year
  });
});

module.exports = router;

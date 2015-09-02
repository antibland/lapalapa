var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    section: 'index',
    title: 'La Palapa',
    year: new Date().getFullYear()
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    section: 'about',
    title: 'About Us',
    year: new Date().getFullYear()
  });
});

router.get('/trailer', function(req, res, next) {
  res.render('trailer', {
    section: 'trailer',
    title: 'The trailer',
    year: new Date().getFullYear()
  });
});

router.get('/menu', function(req, res, next) {
  var Menu = require('../models/menus/menu'),
      fs            = require('fs'),
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

  Menu.find({ type: 'southside' }, function(err, docs) {
    if (!err) {

      res.render('menu', {
        section: 'menu',
        title: 'Our Menu',
        images: scrubbed_names,
        menu_obj: docs,
        year: new Date().getFullYear()
      });

    } else { throw err; }
  });
});

router.get('/catering', function(req, res, next) {
  var Menu = require('../models/menus/menu');

  Menu.find({ type: 'catering' }, function(err, docs) {
    if (!err) {
      res.render('catering', {
        section: 'catering',
        title: 'Catering',
        menu_obj: docs,
        year: new Date().getFullYear()
      });

    } else { throw err; }
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    section: 'contact',
    title: 'Contact Us',
    year: new Date().getFullYear()
  });
});

module.exports = router;

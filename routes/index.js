var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    section: 'index',
    title: 'La Palapa',
    year: new Date().getFullYear(),
    editable_obj: res.app.settings.editable_obj
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    section: 'about',
    title: 'About Us',
    year: new Date().getFullYear(),
    editable_obj: res.app.settings.editable_obj
  });
});

router.get('/menu', function(req, res, next) {
  var Menu = require('../models/menus/menu');

  Menu.find({ type: 'southside' }, function(err, docs) {
    if (!err) {

      res.render('menu', {
        section: 'menu',
        title: 'Our Menu',
        menu_obj: docs,
        year: new Date().getFullYear(),
        editable_obj: res.app.settings.editable_obj
      });

    } else { throw err; }
  });
});

router.get('/friends', function(req, res, next) {
  res.render('friends', {
    section: 'friends',
    title: 'Friends',
    year: new Date().getFullYear(),
    editable_obj: res.app.settings.editable_obj
  });
});

router.get('/catering', function(req, res, next) {
  var Menu = require('../models/menus/menu');

  Menu.find({ type: 'catering' }, function(err, docs) {
    if (!err) {
      console.log(docs);

      res.render('catering', {
        section: 'catering',
        title: 'Catering',
        menu_obj: docs,
        year: new Date().getFullYear(),
        editable_obj: res.app.settings.editable_obj
      });

    } else { throw err; }
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    section: 'contact',
    title: 'Contact Us',
    year: new Date().getFullYear(),
    editable_obj: res.app.settings.editable_obj
  });
});

module.exports = router;

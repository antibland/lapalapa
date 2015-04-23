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
    title: 'La Palapa',
    year: new Date().getFullYear(),
    editable_obj: res.app.settings.editable_obj
  });
});

router.get('/menu', function(req, res, next) {
  res.render('menu', {
    section: 'menu',
    title: 'La Palapa',
    year: new Date().getFullYear(),
    editable_obj: res.app.settings.editable_obj
  });
});

router.get('/friends', function(req, res, next) {
  res.render('friends', {
    section: 'friends',
    title: 'La Palapa',
    year: new Date().getFullYear(),
    editable_obj: res.app.settings.editable_obj
  });
});

router.get('/catering', function(req, res, next) {
  res.render('catering', {
    section: 'catering',
    title: 'La Palapa',
    year: new Date().getFullYear(),
    editable_obj: res.app.settings.editable_obj
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    section: 'contact',
    title: 'La Palapa',
    year: new Date().getFullYear(),
    editable_obj: res.app.settings.editable_obj
  });
});

module.exports = router;
